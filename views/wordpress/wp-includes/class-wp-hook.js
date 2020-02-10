/**
 * Plugin API: WP_Hook class
 *
 * @package WordPress
 * @subpackage Plugin
 * @since 4.7.0
 */

import type {ArrayAccess, Iterator} from "../../../PHP Runtime/Core/Core_c";
import {array, isset, unset} from "../../../PHP Runtime/standard/_types";
import {array_slice, array_unshift, count, current, ksort, min, reset, next,end} from "../../../PHP Runtime/standard/standard_8";
import {array_keys} from "../../../PHP Runtime/standard/standard_9";
import PhpArray from "../../../PHP Runtime/PhpArray";

/**
 * Core class used to implement action and filter hook functionality.
 *
 * @since 4.7.0
 *
 * @see Iterator
 * @see ArrayAccess
 */
export default class WP_Hook implements Iterator, ArrayAccess {

    /**
     * Hook callbacks.
     *
     * @since 4.7.0
     * @var array
     */
    callbacks = array();

    /**
     * The priority keys of actively running iterations of a hook.
     *
     * @since 4.7.0
     * @var array
     */
    iterations = array();

    /**
     * The current priority of actively running iterations of a hook.
     *
     * @since 4.7.0
     * @var array
     */
    current_priority = array();

    /**
     * Number of levels this hook can be recursively called.
     *
     * @since 4.7.0
     * @var int
     */
    nesting_level = 0;

    /**
     * Flag for if we're current doing an action, rather than a filter.
     *
     * @since 4.7.0
     * @var bool
     */
    doing_action = false;

    /**
     * Hooks a function or method to a specific filter action.
     *
     * @since 4.7.0
     *
     *                                  particular action are executed. Lower numbers correspond with
     *                                  earlier execution, and functions with the same priority are executed
     *                                  in the order in which they were added to the action.
     * @param tag
     * @param function_to_add
     * @param priority
     * @param accepted_args
     */
    add_filter = (tag, function_to_add, priority, accepted_args) => {
        const idx = _wp_filter_build_unique_id(tag, function_to_add, priority);
        const priority_existed = isset(this.callbacks.offsetGet(priority));

        this.callbacks.offsetGet(priority).offsetSet(idx, array({
            'function': function_to_add,
            'accepted_args': accepted_args,
        }));

        // if we're adding a new priority to the list, put them back in sorted order
        if (!priority_existed && count(this.callbacks) > 1) {
            ksort(this.callbacks);
        }

        if (this.nesting_level > 0) {
            this.resort_active_iterations(priority, priority_existed);
        }
    };

    /**
     * Handles resetting callback priority keys mid-iteration.
     *
     * @since 4.7.0
     *
     *                                   for no priority being added.
     *                                   filter was added. Default false.
     * @param new_priority
     * @param priority_existed
     */
    resort_active_iterations = (new_priority = false, priority_existed = false) => {
        const new_priorities = array_keys(this.callbacks);

        // If there are no remaining hooks, clear out all running iterations.
        if (!new_priorities) {
            this.iterations.forEach((value) => {
                value.value = new_priorities;
            });
            return;
        }

        const min = min(new_priorities);
        for (const e of this.iterations) {
            const current = current(e.value);
            if (false === current) {
                continue;
            }
            e.value = new_priorities;
            if (current < min) {
                array_unshift(e.value, current);
                continue;
            }
            while (current(e.value) < current) {
                if (false === next(e.value)) {
                    break;
                }
            }
            if (new_priority === this.current_priority.get(e.key) && !priority_existed) {


                // If we have a new priority that didn't exist, but ::apply_filters() or ::do_action() thinks it's the current priority...

                /*
                 * ... and the new priority is the same as what this->iterations thinks is the previous
                 * priority, we need to move back to it.
                 */

                if (false === current(e.value)) {
                    // If we've already moved off the end of the array, go back to the last element.
                    prev = end(e.value);
                } else {
                    // Otherwise, just go back to the previous element.
                    prev = prev(e.value);
                }
                if (false === prev) {
                    // Start of the array. Reset, and go about our day.
                    reset(e.value);
                } else if (new_priority !== prev) {
                    // Previous wasn't the same. Move forward again.
                    next(e.value);
                }
            }
        }
        unset(e.value);
    };

    /**
     * Unhooks a function or method from a specific filter action.
     *
     * @since 4.7.0
     *
     *                                     for building the callback ID when SPL is not available.
     * @param priority
     * @param tag
     * @param function_to_remove
     * @param priority
     */
    remove_filter = (tag, function_to_remove, priority) => {
        const function_key = _wp_filter_build_unique_id(tag, function_to_remove, priority);

        const exists = isset(this.callbacks.get(priority).get(function_key));
        if (exists) {
            unset(this.callbacks.get(priority).get(function_key));
            if (!this.callbacks.get(priority)) {
                unset(this.callbacks.get(priority));
                if (this.nesting_level > 0) {
                    this.resort_active_iterations();
                }
            }
        }
        return exists;
    };

    /**
     * Checks if a specific action has been registered for this hook.
     *
     * @since 4.7.0
     *
     *                                         the callback ID when SPL is not available. Default empty.
     * @param function_to_check
     * @param tag
     * @param function_to_check
     */
    has_filter = (tag = '', function_to_check = false) => {
        if (false === function_to_check) {
            return this.has_filters();
        }

        const function_key = _wp_filter_build_unique_id(tag, function_to_check, false);
        if (!function_key) {
            return false;
        }
        this.callbacks.forEach((priority, callbacks, element) => {
            if (callbacks.get(function_key) !== undefined) {
                return priority;
            }
        });
        return false;
    };

    /**
     * Checks if any callbacks have been registered for this hook.
     *
     * @since 4.7.0
     *
     * @return bool True if callbacks have been registered for the current hook, otherwise false.
     */
    has_filters = () => {
        for (let callbacks of this.callbacks) {
            if (callbacks) {
                return true;
            }
        }
        return false;
    };

    /**
     * Removes all callbacks from the current filter.
     *
     * @since 4.7.0
     *
     * @param priority
     */
    remove_all_filters = (priority = false) => {
        if (!this.callbacks) {
            return;
        }

        if (false === priority) {
            this.callbacks = array();
        } else if (isset(this.callbacks.get(priority))) {

            this.callbacks.delete(priority);
        }

        if (this.nesting_level > 0) {
            this.resort_active_iterations();
        }
    };

    /**
     * Calls the callback functions that have been added to a filter hook.
     *
     * @since 4.7.0
     *
     *                     This array is expected to include value at index 0.
     * @param args
     * @param value
     * @param args
     */
    apply_filters(value, args) {
        if (!this.callbacks
        ) {
            return value;
        }

        const nesting_level = this.nesting_level++;

        this.iterations.set(nesting_level, array_keys(this.callbacks));
        const num_args = count(args);

        do {
            this.current_priority.set(nesting_level, current(this.iterations.get(nesting_level)));
            const priority = this.current_priority.get(nesting_level);
            for (let the_ of this.callbacks.get(priority)) {
                if (!this.doing_action) {
                    args[0] = value;
                }

                // Avoid the array_slice if possible.
                if (the_.get('accepted_args') === 0) {
                    value = the_.get('function')();
                } else if (the_.get('accepted_args') >= num_args) {
                    value = value = the_.get('function')(args);
                } else {
                    value = the_.get(['function'])(array_slice(args, 0, the_.get('accepted_args')));
                }
            }
        } while (false !== next(this.iterations.get(nesting_level)));
        this.iterations.delete(nesting_level);
        this.current_priority.delete(nesting_level);
        this.nesting_level--;
        return value;
    }

    /**
     * Calls the callback functions that have been added to an action hook.
     *
     * @since 4.7.0
     *
     * @param args
     */
    do_action(args) {
        this.doing_action = true;
        this.apply_filters('', args);

        // If there are recursive calls to the current action, we haven't finished it until we get to the last one.
        if (!this.nesting_level) {
            this.doing_action = false;
        }
    }

    /**
     * Processes the functions hooked into the 'all' hook.
     *
     * @since 4.7.0
     *
     * @param args
     */
    do_all_hook(args) {
        const nesting_level = this.nesting_level++;
        this.iterations.set(nesting_level, array_keys(this.callbacks));

        do {
            const priority = current(this.iterations.get(nesting_level));
            for (let the_ of this.callbacks.get(priority)) {
                the_.get('function')(args);
            }
        }
        while (false !== next(this.iterations.get(nesting_level)));
        this.iterations.delete(nesting_level);
        this.nesting_level--;
    }

    /**
     * Return the current priority level of the currently running iteration of the hook.
     *
     * @since 4.7.0
     *
     * @return int|false If the hook is running, return the current priority level. If it isn't running, return false.
     */
    current_priority() {
        if (false === current(this.iterations) )
        {
            return false;
        }

        return current(current(this.iterations));
    }

    /**
     * Normalizes filters set up before WordPress has initialized to WP_Hook objects.
     *
     * @since 4.7.0
     *
     * @return WP_Hook[] Array of normalized filters.
     * @param filters
     */
    static build_preinitialized_hooks(filters:PhpArray) {
        /** @var WP_Hook[] normalized */
        const normalized = array();
        filters.forEach((tag, callback_groups, element) => {
            if (callback_groups instanceof WP_Hook) {
                normalized.set(tag,callback_groups);
                return
            }
            const hook = new WP_Hook();

            // Loop through callback groups.
            callback_groups.forEach((priority,callbacks)=>{
                for(let cb of callbacks){
                    hook.add_filter(tag,cb.get('function'),priority,cb.get('accepted_args'));
                }
            });

            normalized.set(tag,hook);
        });

        return normalized;
    }

    /**
     * Determines whether an offset value exists.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/arrayaccess.offsetexists.php
     *
     * @return bool True if the offset exists, false otherwise.
     * @param offset
     */
    offsetExists(offset) {
        return isset(this.callbacks.get(offset));
    }

    /**
     * Retrieves a value at a specified offset.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/arrayaccess.offsetget.php
     *
     * @return mixed If set, the value at the specified offset, null otherwise.
     * @param offset
     */
    offsetGet(offset) {
        return isset(this.callbacks.get(offset))
            ? this.callbacks.get(offset)
            :
            null;
    }

    /**
     * Sets a value at a specified offset.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/arrayaccess.offsetset.php
     *
     * @param offset
     * @param value
     */
    offsetSet(offset, value) {
        if (offset === null) {
            this.callbacks.push();
        } else {
            this.callbacks.set(offset,value);
        }
    }

    /**
     * Unsets a specified offset.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/arrayaccess.offsetunset.php
     *
     * @param offset
     */
    offsetUnset(offset) {
        this.callbacks.delete(offset);
    }

    /**
     * Returns the current element.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/iterator.current.php
     *
     * @return array Of callbacks at current priority.
     */
    current() {
        return current(this.callbacks);
    }

    /**
     * Moves forward to the next element.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/iterator.next.php
     *
     * @return array Of callbacks at next priority.
     */
    next() {
        return next(this.callbacks);
    }

    /**
     * Returns the key of the current element.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/iterator.key.php
     *
     * @return mixed Returns current priority on success, or NULL on failure
     */
    key() {
        return key(this.callbacks);
    }

    /**
     * Checks if current position is valid.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/iterator.valid.php
     *
     * @return boolean
     */
    valid() {
        return key(this.callbacks) !== null;
    }

    /**
     * Rewinds the Iterator to the first element.
     *
     * @since 4.7.0
     *
     * @link https://secure.php.net/manual/en/iterator.rewind.php
     */
    rewind() {
        reset(this.callbacks);
    }

}
