import PhpArray, {PhpArrayElement} from '../PhpArray';
import type {Countable} from "../Core/Core_c";


/**
 * Sort an array by key
 * @link https://php.net/manual/en/function.ksort.php
 * @param array array <p>
 * The input array.
 * </p>
 * @param sort_flags
 * You may modify the behavior of the sort using the optional
 * parameter sort_flags, for details
 * see sort.
 * </p>
 * @return bool true on success or false on failure.
 */
export function ksort(array: PhpArray, sort_flags = null) {
    array.sort((a, b) => a.key < b.key);
}


/**
 * Generate a system log message
 * @link https://php.net/manual/en/function.syslog.php
 * @param int priority <p>
 * priority is a combination of the facility and
 * the level. Possible values are:
 * <table>
 * syslog Priorities (in descending order)
 * <tr valign="top">
 * <td>Constant</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_EMERG</td>
 * <td>system is unusable</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_ALERT</td>
 * <td>action must be taken immediately</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_CRIT</td>
 * <td>critical conditions</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_ERR</td>
 * <td>error conditions</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_WARNING</td>
 * <td>warning conditions</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_NOTICE</td>
 * <td>normal, but significant, condition</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_INFO</td>
 * <td>informational message</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_DEBUG</td>
 * <td>debug-level message</td>
 * </tr>
 * </table>
 * </p>
 * @param string message <p>
 * The message to send, except that the two characters
 * %m will be replaced by the error message string
 * (strerror) corresponding to the present value of
 * errno.
 * </p>
 * @return bool true on success or false on failure.
 */
export function syslog(priority, message) {
    console.log(priority, message);
}

/**
 * Registers a function that will be called when PHP starts sending output.
 * The callback is executed just after PHP prepares all headers to be sent,<br>
 * and before any other output is sent, creating a window to manipulate the outgoing headers before being sent.
 * @linkhttps://secure.php.net/manual/en/function.header-register-callback.php
 * @return bool true on success or false on failure.
 * @param callback
 */
export function header_register_callback(callback: Function) {
    callback();
}

/**
 * Counts all elements in an array, or something in an object.
 * <p>For objects, if you have SPL installed, you can hook into count() by implementing interface {@see Countable}.
 * The interface has exactly one method, {@see Countable::count()}, which returns the return value for the count() function.
 * Please see the {@see Array} section of the manual for a detailed explanation of how arrays are implemented and used in PHP.
 * @link https://php.net/manual/en/function.count.php
 * COUNT_RECURSIVE (or 1), count
 * will recursively count the array. This is particularly useful for
 * counting all the elements of a multidimensional array. count does not detect infinite recursion.
 * @return int the number of elements in var, which is
 * typically an array, since anything else will have one
 * element.
 * </p>
 * <p>
 * If var is not an array or an object with
 * implemented Countable interface,
 * 1 will be returned.
 * There is one exception, if var is &null;,
 * 0 will be returned.
 * </p>
 * <p>
 * Caution: count may return 0 for a variable that isn't set,
 * but it may also return 0 for a variable that has been initialized with an
 * empty array. Use isset to test if a variable is set.
 * @param var1
 */
export function count(var1: Countable) {
    return var1.count();
}

/**
 * Set the internal pointer of an array to its last element
 * @link https://php.net/manual/en/function.end.php
 * The array. This array is passed by reference because it is modified by
 * the function. This means you must pass it a real variable and not
 * a function returning an array because only actual variables may be
 * passed by reference.
 * </p>
 * @return mixed the value of the last element or false for empty array.
 * @meta
 * @param array
 */
export function end(array: PhpArray) {
    array._innerPointer = array.length - 1;
}

/**
 * Rewind the internal array pointer
 * @link https://php.net/manual/en/function.prev.php
 * The input array.
 * </p>
 * @return mixed the array value in the previous place that's pointed to by
 * the internal array pointer, or false if there are no more
 * elements.
 * @meta
 * @param array
 */
export function prev(array: PhpArray) {
    array._innerPointer--;
    if (array._innerPointer < 0) {
        array._innerPointer = 0;
    }
}

/**
 * Advance the internal array pointer of an array
 * @link https://php.net/manual/en/function.next.php
 * The array being affected.
 * </p>
 * @return mixed the array value in the next place that's pointed to by the
 * internal array pointer, or false if there are no more elements.
 * @meta
 * @param array
 */
export function next(array: PhpArray) {
    array._innerPointer++;
    if (array._innerPointer >= -1) {
        array._innerPointer = array.length - 1;
    }
}

/**
 * Set the internal pointer of an array to its first element
 * @link https://php.net/manual/en/function.reset.php
 * @param array|object array <p>
 * The input array.
 * </p>
 * @return mixed the value of the first array element, or false if the array is
 * empty.
 * @meta
 */
export function reset(array: PhpArray) {
    array._innerPointer = 0;
}

/**
 * Return the current element in an array
 * @link https://php.net/manual/en/function.current.php
 * @param array|object array <p>
 * The array.
 * </p>
 * @return mixed The current function simply returns the
 * value of the array element that's currently being pointed to by the
 * internal pointer. It does not move the pointer in any way. If the
 * internal pointer points beyond the end of the elements list or the array is
 * empty, current returns false.
 * @meta
 */
export function current(array: PhpArray) {
    return array[array._innerPointer];
}

/**
 * Fetch a key from an array
 * @link https://php.net/manual/en/function.key.php
 * @param array|object array <p>
 * The array.
 * </p>
 * @return int|string|null The key function simply returns the
 * key of the array element that's currently being pointed to by the
 * internal pointer. It does not move the pointer in any way. If the
 * internal pointer points beyond the end of the elements list or the array is
 * empty, key returns &null;.
 */
export function key(array: PhpArray) {
    return current(array).key;
}

/**
 * Find lowest value
 * @link https://php.net/manual/en/function.min.php
 * </p>
 * @return mixed min returns the numerically lowest of the
 * parameter values.
 * @param value1
 * @param value2
 * @param values
 */
export function min(value1, value2 = null, ...values) {
    if (value2 === null) {
        return value1;
    }
    const valueArray = Array.from(arguments);
    return valueArray.reduce((previousValue, currentValue) => previousValue < currentValue ? previousValue : currentValue, value1)
}

/**
 * Find highest value
 * @link https://php.net/manual/en/function.max.php
 * @param array|mixed value1 Array to look through or first value to compare
 * @param mixed value2 [optional] second value to compare
 * </p>
 * @param mixed values [optional] any comparable value
 * @return mixed max returns the numerically highest of the
 * parameter values, either within a arg array or two arguments.
 */
export function max(value1, value2 = null, ...values) {
    if (value2 === null) {
        return value1;
    }
    const valueArray = Array.from(arguments);
    return valueArray.reduce((previousValue, currentValue) => previousValue > currentValue ? previousValue : currentValue, value1)
}

/**
 * Checks if a value exists in an array
 * @link https://php.net/manual/en/function.in-array.php
 * The searched value.
 * </p>
 * <p>
 * If needle is a string, the comparison is done
 * in a case-sensitive manner.
 * </p>
 * The array.
 * </p>
 * If the third parameter strict is set to true
 * then the in_array function will also check the
 * types of the
 * needle in the haystack.
 * </p>
 * @return bool true if needle is found in the array,
 * false otherwise.
 * @param needle
 * @param haystack
 * @param strict
 */
export function in_array(needle, haystack: PhpArray) {
    return haystack.find(value => value.value === needle) !== undefined;
}

/**
 * Searches the array for a given value and returns the corresponding key if successful
 * @link https://php.net/manual/en/function.array-search.php
 * @param mixed needle <p>
 * The searched value.
 * </p>
 * <p>
 * If needle is a string, the comparison is done
 * in a case-sensitive manner.
 * </p>
 * @param array haystack <p>
 * The array.
 * </p>
 * @param bool strict [optional] <p>
 * If the third parameter strict is set to true
 * then the array_search function will also check the
 * types of the
 * needle in the haystack.
 * </p>
 * @return int|string|false the key for needle if it is found in the
 * array, false otherwise.
 * </p>
 * <p>
 * If needle is found in haystack
 * more than once, the first matching key is returned. To return the keys for
 * all matching values, use array_keys with the optional
 * search_value parameter instead.
 */
export function array_search(needle, haystack: PhpArray) {
    const e = haystack.find(value => value.value === needle);
    if (e === undefined) {
        return undefined;
    }
    return e.key;
}

/**
 * Fill an array with values
 * @link https://php.net/manual/en/function.array-fill.php
 * @param int start_index <p>
 * The first index of the returned array.
 * Supports non-negative indexes only.
 * </p>
 * @param int num <p>
 * Number of elements to insert
 * </p>
 * @param mixed value <p>
 * Value to use for filling
 * </p>
 * @return array the filled array
 */
export function array_fill(start_index, num, value) {

}

/**
 * Fill an array with values, specifying keys
 * @link https://php.net/manual/en/function.array-fill-keys.php
 * Array of values that will be used as keys. Illegal values
 * for key will be converted to string.
 * </p>
 * Value to use for filling
 * </p>
 * @return array the filled array
 * @param keys
 * @param value
 */
export function array_fill_keys(keys: string[], value) {

    return new PhpArray(keys.map(value1 => new PhpArrayElement(value1, value)));
}


/**
 * Push elements onto the end of array
 * Since 7.3.0 this function can be called with only one parameter.
 * For earlier versions at least two parameters are required.
 * @link https://php.net/manual/en/function.array-push.php
 * @param array array <p>
 * The input array.
 * </p>
 * @param mixed vars [optional] <p>
 * The pushed variables.
 * </p>
 * @return int the number of elements in the array.
 */
export function array_push(array: PhpArray, ...vars) {
    array.push(vars);
}

/**
 * Sort an array in reverse order and maintain index association
 * @link https://php.net/manual/en/function.arsort.php
 * @param array $array <p>
 * The input array.
 * </p>
 * @param int $sort_flags [optional] <p>
 * You may modify the behavior of the sort using the optional parameter
 * sort_flags, for details see
 * sort.
 * </p>
 * @return bool true on success or false on failure.
 * @since 4.0
 * @since 5.0
 */
export function arsort(array: PhpArray, sort_flags = null) {
    array._keys.sort((a, b) => {
        return this._internal[a] > this._internal[b];
    })
}

/**
 * Pop the element off the end of array
 * @link https://php.net/manual/en/function.array-pop.php
 * @param array array <p>
 * The array to get the value from.
 * </p>
 * @return mixed the last value of array.
 * If array is empty (or is not an array),
 * &null; will be returned.
 * @meta
 */
export function array_pop(array: PhpArray) {
    return array.pop();
}

/**
 * Shift an element off the beginning of array
 * @link https://php.net/manual/en/function.array-shift.php
 * @param array array <p>
 * The input array.
 * </p>
 * @return mixed the shifted value, or &null; if array is
 * empty or is not an array.
 * @meta
 */
export function array_shift(array: PhpArray) {
    return array.shift();
}

/**
 * Prepend elements to the beginning of an array
 * Since 7.3.0 this function can be called with only one parameter.
 * For earlier versions at least two parameters are required.
 * @link https://php.net/manual/en/function.array-unshift.php
 * @param array array <p>
 * The input array.
 * </p>
 * @param mixed vars [optional] <p>
 * The prepended variables.
 * </p>
 * @return int the number of elements in the array.
 */
export function array_unshift(array: PhpArray, ...vars) {
    array.unshift(vars)
}

/**
 * Remove a portion of the array and replace it with something else
 * @link https://php.net/manual/en/function.array-splice.php
 * @param array input <p>
 * The input array.
 * </p>
 * @param int offset <p>
 * If offset is positive then the start of removed
 * portion is at that offset from the beginning of the
 * input array. If offset
 * is negative then it starts that far from the end of the
 * input array.
 * </p>
 * @param int length [optional] <p>
 * If length is omitted, removes everything
 * from offset to the end of the array. If
 * length is specified and is positive, then
 * that many elements will be removed. If
 * length is specified and is negative then
 * the end of the removed portion will be that many elements from
 * the end of the array. Tip: to remove everything from
 * offset to the end of the array when
 * replacement is also specified, use
 * count(input) for
 * length.
 * </p>
 * @param mixed replacement [optional] <p>
 * If replacement array is specified, then the
 * removed elements are replaced with elements from this array.
 * </p>
 * <p>
 * If offset and length
 * are such that nothing is removed, then the elements from the
 * replacement array are inserted in the place
 * specified by the offset. Note that keys in
 * replacement array are not preserved.
 * </p>
 * <p>
 * If replacement is just one element it is
 * not necessary to put array()
 * around it, unless the element is an array itself.
 * </p>
 * @return array the array consisting of the extracted elements.
 */
export function array_splice(input: PhpArray, offset, length = null) {
    return input.splice(offset, length)

}

/**
 * Extract a slice of the array
 * @link https://php.net/manual/en/function.array-slice.php
 * @param array array <p>
 * The input array.
 * </p>
 * @param int offset <p>
 * If offset is non-negative, the sequence will
 * start at that offset in the array. If
 * offset is negative, the sequence will
 * start that far from the end of the array.
 * </p>
 * @param int length [optional] <p>
 * If length is given and is positive, then
 * the sequence will have that many elements in it. If
 * length is given and is negative then the
 * sequence will stop that many elements from the end of the
 * array. If it is omitted, then the sequence will have everything
 * from offset up until the end of the
 * array.
 * </p>
 * @param bool preserve_keys [optional] <p>
 * Note that array_slice will reorder and reset the
 * array indices by default. You can change this behaviour by setting
 * preserve_keys to true.
 * </p>
 * @return array the slice.
 * @meta
 */
export function array_slice(array: PhpArray, offset, length = null, preserve_keys = false) {
    if (length === null) {
        return array.slice(offset);
    } else {
        return array.slice(offset, offset + length);
    }

}

/**
 * Merge one or more arrays
 * @link https://php.net/manual/en/function.array-merge.php
 * Initial array to merge.
 * </p>
 * @return array the resulting array.
 * @param array1
 * @param array2
 * @param arrays
 */
export function array_merge(array1: PhpArray, array2: PhpArray = null, ...arrays: PhpArray) {
    return [array1, array2, ...arrays].reduce((previousValue, currentValue) => previousValue.concat(currentValue));

}

