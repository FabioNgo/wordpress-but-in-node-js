import {Exception, Iterator, Throwable} from '../Core/Core_c';
/**
 * Creates an array.
 * @link https://php.net/manual/en/function.array.php
 * @param mixed _ [optional] <p>
 * Syntax "index => values", separated by commas, define index and values.
 * index may be of type string or integer. When index is omitted, an integer index is automatically generated,
 * starting at 0. If index is an integer, next generated index will be the biggest integer index + 1.
 * Note that when two identical index are defined, the last overwrite the first.
 * </p>
 * <p>
 * Having a trailing comma after the last defined array entry, while unusual, is a valid syntax.
 * </p>
 * @return array an array of the parameters. The parameters can be given an index with the => operator.
 */
import PhpArray from '../PhpArray';
import GLOBAL from '../Core/GLOBAL';


export function array (..._) {
	return new PhpArray(_);
}


/**
 * Determine whether a variable is considered to be empty. A variable is considered empty if it does not exist or if
 * its value equals <b>FALSE</b>. <b>empty()</b> does not generate a warning if the variable does not exist.
 * @link https://php.net/manual/en/function.empty.php
 * <p>Note: Prior to PHP 5.5, <b>empty()</b> only supports variables; anything else will result in a parse error. In
 *     other words, the following will not work: <b>empty(trim(name))</b>. Instead, use <b>trim(name) == false</b>.
 * </p>
 * <p>
 * No warning is generated if the variable does not exist. That means <b>empty()</b> is essentially the concise
 *     equivalent to <b>!isset(var) || var == false</b>.
 * </p>
 * @return bool <p><b>FALSE</b> if var exists and has a non-empty, non-zero value. Otherwise returns <b>TRUE</b>.<p>
 * <p>
 * The following things are considered to be empty:
 * <ul>
 * <li>"" (an empty string)</li>
 * <li>0 (0 as an integer)</li>
 * <li>0.0 (0 as a float)</li>
 * <li>"0" (0 as a string)</li>
 * <li><b>NULL</b></li>
 * <li><b>FALSE</b></li>
 * <li>array() (an empty array)</li>
 * <li>var; (a variable declared, but without a value)</li>
 * </ul>
 * </p>
 * @param var1
 */
export function empty (var1) {
	switch (var1) {
		case '':
		case 0:
		case 0.0:
		case null:
		case false:
		case var1.length === 0:
			return true;
		default:
			return false;
	}
	
};

/**
 * <p>Determine if a variable is set and is not <b>NULL</b>.</p>
 * <p>If a variable has been unset with unset(), it will no longer be set. <b>isset()</b> will return <b>FALSE</b> if
 * testing a variable that has been set to <b>NULL</b>. Also note that a null character ("\0") is not equivalent to the
 * PHP <b>NULL</b> constant.</p>
 * <p>If multiple parameters are supplied then <b>isset()</b> will return <b>TRUE</b> only if all of the parameters are
 * set. Evaluation goes from left to right and stops as soon as an unset variable is encountered.</p>
 * @link https://php.net/manual/en/function.isset.php
 * @param _
 * @param var1
 * @param _
 */
export function isset (var1, ..._) {
	if (_.length === 0) {
		return var1 !== undefined;
	}
	return var1 === undefined && isset(_[0], _.slice(0));
};

/**
 * <p>Destroys the specified variables.</p>
 * <p>The behavior of <b>unset()</b> inside of a export function can vary depending on what type of variable you are
 * attempting to destroy.</p>
 * @link https://php.net/manual/en/function.unset.php
 * @param _
 * @param var1
 * @param _
 */
export function unset (var1, ..._) {
	if (_.length === 0) {
		var1 = undefined;
		return;
	}
	unset(_[0], _.slice(0));
	return;
}


/**
 * Generator objects are returned from generators, cannot be instantiated via new.
 * @link https://secure.php.net/manual/en/class.generator.php
 * @link https://wiki.php.net/rfc/generators
 */
export class Generator implements Iterator {
	/**
	 * Throws an exception if the generator is currently after the first yield.
	 * @return void
	 */
	
	rewind () {
	}
	
	/**
	 * Returns false if the generator has been closed, true otherwise.
	 * @return bool
	 */
	
	valid () {
	}
	
	/**
	 * Returns whatever was passed to yield or null if nothing was passed or the generator is already closed.
	 * @return mixed
	 */
	export;
	function;
	
	current () {
	}
	
	/**
	 * Returns the yielded key or, if none was specified, an auto-incrementing key or null if the generator is already
	 * closed.
	 * @return string|float|int|bool|null
	 */
	key () {
	}
	
	/**
	 * Resumes the generator (unless the generator is already closed).
	 * @return void
	 */
	
	next () {
	}
	
	/**
	 * Sets the return value of the yield expression and resumes the generator (unless the generator is already closed).
	 * @param mixed value
	 * @return mixed
	 */
	
	send (value) {
	}
	
	/**
	 * Throws an exception at the current suspension point in the generator.
	 * @return mixed
	 * @param exception
	 */
	
	throw (exception: Throwable) {
	}
	
	/**
	 * Returns whatever was passed to return or null if nothing.
	 * Throws an exception if the generator is still valid.
	 * @link https://wiki.php.net/rfc/generator-return-expressions
	 * @return mixed|null
	 * @since 7.0
	 */
	
	getReturn () {
	}
	
	/**
	 * Serialize callback
	 * Throws an exception as generators can't be serialized.
	 * @link https://php.net/manual/en/generator.wakeup.php
	 * @return void
	 */
		
	__wakeup () {
	}
}

class ClosedGeneratorException extends Exception {
}
export class NotImplementedError extends Error{
	constructor() {
		super("Not Implemented");
	}
}


