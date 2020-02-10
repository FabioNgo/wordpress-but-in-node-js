/**
 * @since 5.6
 */
import PhpArray, {PhpArrayElement} from "../PhpArray";
import GLOBAL from "../Core/GLOBAL";

define ("ARRAY_FILTER_USE_BOTH", 1);

/**
 * @since 5.6
 */
define ("ARRAY_FILTER_USE_KEY", 2);



/**
 * Return all the keys of an array
 * @link https://php.net/manual/en/function.array-keys.php
 * An array containing keys to return.
 * </p>
 * If specified, then only keys containing these values are returned.
 * </p>
 * Determines if strict comparison (===) should be used during the search.
 * </p>
 * @return array an array of all the keys in input.
 * @param input
 * @param search_value
 * @param strict
 */
export function array_keys(input:PhpArray, search_value:string = null, strict = null) {
    return input.map(e=>e.key).filter(value => {
        if (search_value !== null) {
            if(strict === null){
                return value == search_value;
            }else{
                return value === search_value;
            }

        }
    });
}

/**
 * Return all the values of an array
 * @link https://php.net/manual/en/function.array-values.php
 * @param array input <p>
 * The array.
 * </p>
 * @return array an indexed array of values.
 * @meta
 */
export function array_values(input:PhpArray) {
    return input.map(value => value.value);
}

/**
 * Counts all the values of an array
 * @link https://php.net/manual/en/function.array-count-values.php
 * The array of values to count
 * </p>
 * @return array an associative array of values from input as
 * keys and their count as value.
 * @param input
 */
export function array_count_values(input:PhpArray) {
    const map = new Map<string,PhpArrayElement>();
    input.forEach(value =>{
        if(map.get(value) === undefined){
            map.set(value,new PhpArrayElement(value,1));
        }else{
            map.get(value).value++;
        }
    })
    return new PhpArray(map.values())
}

/**
 * Return an array with elements in reverse order
 * @link https://php.net/manual/en/function.array-reverse.php
 * @param array array <p>
 * The input array.
 * </p>
 * @param bool preserve_keys [optional] <p>
 * If set to true keys are preserved.
 * </p>
 * @return array the reversed array.
 * @meta
 */
export function array_reverse(array:PhpArray) {
    return array.reverse()
}

/**
 * Iteratively reduce the array to a single value using a callback function
 * @link https://php.net/manual/en/function.array-reduce.php
 * The input array.
 * </p>
 * @param input
 * @param callbackfn
 * The callback function.
 * </p>
 * @param initial
 * If the optional initial is available, it will
 * be used at the beginning of the process, or as a final result in case
 * the array is empty.
 * </p>
 * @return mixed the resulting value.
 * </p>
 * <p>
 * If the array is empty and initial is not passed,
 * array_reduce returns null.
 * @meta
 */
export function array_reduce(input:PhpArray, callbackfn: (previousValue: PhpArrayElement, currentValue: PhpArrayElement, currentIndex: number, array: PhpArray) => PhpArrayElement, initial = null) {
    if(initial === null){
        return input.reduce(callbackfn);
    }
    return input.reduce(callbackfn,initial);
}

/**
 * Exchanges all keys with their associated values in an array
 * @link https://php.net/manual/en/function.array-flip.php
 * @param array array <p>
 * An array of key/value pairs to be flipped.
 * </p>
 * @return array Returns the flipped array.
 */
export function array_flip(array:PhpArray) {
    return new PhpArray(array.map(value => new PhpArrayElement(value.value,value.key)));
}

/**
 * Changes all keys in an array
 * @link https://php.net/manual/en/function.array-change-key-case.php
 * @param array input <p>
 * The array to work on
 * </p>
 * @param int case [optional] <p>
 * Either CASE_UPPER or
 * CASE_LOWER (default)
 * </p>
 * @return array an array with its keys lower or uppercased
 * @meta
 */
export function array_change_key_case(input:PhpArray, _case = GLOBAL.CASE_LOWER) {
    if(_case === GLOBAL.CASE_LOWER){
        return new PhpArray(input.map(value => new PhpArrayElement(value.key.toLowerCase(),value)))
    }else{
        return new PhpArray(input.map(value => new PhpArrayElement(value.key.toUpperCase(),value)))
    }
}



/**
 * Calculate the sum of values in an array
 * @link https://php.net/manual/en/function.array-sum.php
 * @param array array <p>
 * The input array.
 * </p>
 * @return int|float the sum of values as an integer or float.
 */
export function array_sum(array:PhpArray) {
    return array.map(value => value.value).reduce((previousValue, currentValue) => currentValue instanceof Number ? previousValue + currentValue : previousValue,0);
}

/**
 * Calculate the product of values in an array
 * @link https://php.net/manual/en/function.array-product.php
 * @param array array <p>
 * The array.
 * </p>
 * @return int|float the product as an integer or float.
 */
export function array_product(array:PhpArray) {
    return array.map(value => value.value).reduce((previousValue, currentValue) => currentValue instanceof Number ? previousValue * currentValue : previousValue,0);
}

/**
 * Iterates over each value in the <b>array</b>
 * passing them to the <b>callback</b> function.
 * If the <b>callback</b> function returns true, the
 * current value from <b>array</b> is returned into
 * the result array. Array keys are preserved.
 * @link https://php.net/manual/en/function.array-filter.php
 * The array to iterate over
 * </p>
 * The callback function to use
 * </p>
 * <p>
 * If no callback is supplied, all entries of
 * input equal to false (see
 * converting to
 * boolean) will be removed.
 * </p>
 * Flag determining what arguments are sent to <i>callback</i>:
 * </p><ul>
 * <li>
 * <b>ARRAY_FILTER_USE_KEY</b> - pass key as the only argument
 * to <i>callback</i> instead of the value</span>
 * </li>
 * <li>
 * <b>ARRAY_FILTER_USE_BOTH</b> - pass both value and key as
 * arguments to <i>callback</i> instead of the value</span>
 * </li>
 * </ul>
 * @return array the filtered array.
 * @meta
 * @param input
 * @param callbackfn
 * @param flag
 */
export function array_filter(input:PhpArray, callbackfn: (value: PhpArrayElement, index: number, array: PhpArray) => value, flag = 0) {
    return input.filter(callbackfn)
}

/**
 * Applies the callback to the elements of the given arrays
 * @link https://php.net/manual/en/function.array-map.php
 * Callback function to run for each element in each array.
 * </p>
 * An array to run through the callback function.
 * </p>
 * @return array an array containing all the elements of arr1
 * after applying the callback function to each one.
 * @meta
 * @param callbackfn
 * @param array1
 * @param _
 */
export function array_map(callbackfn: (array1:PhpArrayElement, ..._: PhpArrayElement) => any, array1:PhpArray, ..._: PhpArray) {
    const result = new PhpArray();
    array1.forEach((value, index) => {
        result.push(callbackfn(value,_.map(value1 => value1[index])));
    });
    return result;
}

/**
 * Checks if the given key or index exists in the array
 * @link https://php.net/manual/en/function.array-key-exists.php
 * @param mixed key <p>
 * Value to check.
 * </p>
 * @param array|ArrayObject search <p>
 * An array with keys to check.
 * </p>
 * @return bool true on success or false on failure.
 */
export function array_key_exists(key, search:PhpArray) {
    return search.find(value => value.key ===key);
}

/**
 * Gets the first key of an array
 *
 * Get the first key of the given array without affecting the internal array pointer.
 *
 * @link https://secure.php.net/array_key_first
 * @param array array An array
 * @return string|int|null Returns the first key of array if the array is not empty; NULL otherwise.
 * @since 7.3
 */
export function array_key_first(array:PhpArray) {
    if(array.length > 0){
        return array[0].key;
    }
    return null;

}

/**
 * Gets the last key of an array
 *
 * Get the last key of the given array without affecting the internal array pointer.
 *
 * @link https://secure.php.net/array_key_last
 * @param array array An array
 * @return string|int|null Returns the last key of array if the array is not empty; NULL otherwise.
 * @since 7.3
 */
export function array_key_last(array:PhpArray) {
    if(array.length > 0){
        return array[array.length-1].key;
    }
    return null;
}

