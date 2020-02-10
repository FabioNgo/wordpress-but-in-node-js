// Start of Core v.5.3.6-13ubuntu3.2

import GLOBAL from './GLOBAL';

/**
 * Gets the version of the current Zend engine
 * @link https://php.net/manual/en/function.zend-version.php
 * @return string the Zend Engine version number, as a string.
 */
export function zend_version () {
}





/**
 * Get string length
 * @link https://php.net/manual/en/function.strlen.php
 * The string being measured for length.
 * </p>
 * @return int The length of the <i>string</i> on success,
 * and 0 if the <i>string</i> is empty.
 * @param string
 */
export function strlen (string: string) {
	return string.length;
}

/**
 * Binary safe string comparison
 * @link https://php.net/manual/en/function.strcmp.php
 * The first string.
 * </p>
 * The second string.
 * </p>
 * <i>str2</i>; &gt; 0 if <i>str1</i>
 * is greater than <i>str2</i>, and 0 if they are
 * equal.
 * @param str2
 * @param str1
 * @param str2
 */
export function strcmp (str1:string, str2:string) {
	return str1 === str2;
}

/**
 * Binary safe string comparison of the first n characters
 * @link https://php.net/manual/en/function.strncmp.php
 * The first string.
 * </p>
 * The second string.
 * </p>
 * Number of characters to use in the comparison.
 * </p>
 * <i>str2</i>; &gt; 0 if <i>str1</i>
 * is greater than <i>str2</i>, and 0 if they are
 * equal.
 * @param len
 * @param str1
 * @param str2
 * @param len
 */
export function strncmp (str1:string, str2:string, len:number) {
	return str1.substr(len) === str2.substr(len);
}

/**
 * Binary safe case-insensitive string comparison
 * @link https://php.net/manual/en/function.strcasecmp.php
 * The first string
 * </p>
 * The second string
 * </p>
 * <i>str2</i>; &gt; 0 if <i>str1</i>
 * is greater than <i>str2</i>, and 0 if they are
 * equal.
 * @param str2
 * @param str1
 * @param str2
 */
export function strcasecmp (str1, str2) {
	return strcmp(str1.toLowerCase(),str2.toLowerCase());
}

/**
 * Binary safe case-insensitive string comparison of the first n characters
 * @link https://php.net/manual/en/function.strncasecmp.php
 * The first string.
 * </p>
 * The second string.
 * </p>
 * The length of strings to be used in the comparison.
 * </p>
 * <i>str2</i>; &gt; 0 if <i>str1</i> is
 * greater than <i>str2</i>, and 0 if they are equal.
 * @param len
 * @param str1
 * @param str2
 * @param len
 */
export function strncasecmp (str1, str2, len) {
	return strncmp(str1.toLowerCase(),str2.toLowerCase(),len);
}


/**
 * Sets which PHP errors are reported
 * @link https://php.net/manual/en/function.error-reporting.php
 * The new error_reporting
 * level. It takes on either a bitmask, or named constants. Using named
 * constants is strongly encouraged to ensure compatibility for future
 * versions. As error levels are added, the range of integers increases,
 * so older integer-based error levels will not always behave as expected.
 * </p>
 * <p>
 * The available error level constants and the actual
 * meanings of these error levels are described in the
 * predefined constants.
 * <table>
 * error_reporting level constants and bit values
 * <tr valign="top">
 * <td>value</td>
 * <td>constant</td>
 * </tr>
 * <tr valign="top">
 * <td>1</td>
 * <td>
 * E_ERROR
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>2</td>
 * <td>
 * E_WARNING
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>4</td>
 * <td>
 * E_PARSE
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>8</td>
 * <td>
 * E_NOTICE
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>16</td>
 * <td>
 * E_CORE_ERROR
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>32</td>
 * <td>
 * E_CORE_WARNING
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>64</td>
 * <td>
 * E_COMPILE_ERROR
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>128</td>
 * <td>
 * E_COMPILE_WARNING
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>256</td>
 * <td>
 * E_USER_ERROR
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>512</td>
 * <td>
 * E_USER_WARNING
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>1024</td>
 * <td>
 * E_USER_NOTICE
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>32767</td>
 * <td>
 * E_ALL
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>2048</td>
 * <td>
 * E_STRICT
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>4096</td>
 * <td>
 * E_RECOVERABLE_ERROR
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>8192</td>
 * <td>
 * E_DEPRECATED
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>16384</td>
 * <td>
 * E_USER_DEPRECATED
 * </td>
 * </tr>
 * </table>
 * </p>
 * @return int the old error_reporting
 * level or the current level if no <i>level</i> parameter is
 * given.
 * @param level
 */
export function error_reporting (level = null) {
}

/**
 * Defines a named constant
 * @link https://php.net/manual/en/function.define.php
 * The name of the constant.
 * </p>
 * The value of the constant; only scalar and null values are allowed.
 * Scalar values are integer,
 * float, string or boolean values. It is
 * possible to define resource constants, however it is not recommended
 * and may cause unpredictable behavior.
 * </p>
 * If set to true, the constant will be defined case-insensitive.
 * The default behavior is case-sensitive; i.e.
 * CONSTANT and Constant represent
 * different values.
 * </p>
 * <p>
 * Case-insensitive constants are stored as lower-case.
 * </p>
 * @param case_insensitive
 * @param name
 * @param value
 * @param case_insensitive
 */
export function define (name:string, value) {
	GLOBAL[name] = value;
}

/**
 * Checks whether a given named constant exists
 * @link https://php.net/manual/en/function.defined.php
 * The constant name.
 * </p>
 * @return bool true if the named constant given by <i>name</i>
 * has been defined, false otherwise.
 * @param name
 */
export function defined (name) : boolean{
	return this[name] !== undefined && this[name] !== null;
}

/**
 * Returns the name of the class of an object
 * @link https://php.net/manual/en/function.get-class.php
 * The tested object. This parameter may be omitted when inside a class.
 * </p>
 * @return string|false <p>The name of the class of which <i>object</i> is an
 * instance. Returns false if <i>object</i> is not an
 * object.
 * </p>
 * <p>
 * If <i>object</i> is omitted when inside a class, the
 * name of that class is returned.
 * @param object
 */
export function get_class (object = null) {
	if(object === null){
		return false;
	}else{
		return typeof object;
	}
}

/**
 * the "Late Static Binding" class name
 * @link https://php.net/manual/en/function.get-called-class.php
 * @return string|false The class name. Returns false if called from outside a class.
 */
export function get_called_class () {
}

/**
 * Retrieves the parent class name for object or class
 * @link https://php.net/manual/en/function.get-parent-class.php
 * The tested object or class name
 * </p>
 * @return string|false <p>The name of the parent class of the class of which
 * <i>object</i> is an instance or the name.
 * </p>
 * <p>
 * If the object does not have a parent false will be returned.
 * </p>
 * <p>
 * If called without parameter outside object, this export function returns false.
 * @param object
 */
export function get_parent_class (object = null) {
}

/**
 * Checks if the class method exists
 * @link https://php.net/manual/en/function.method-exists.php
 * An object instance or a class name
 * </p>
 * The method name
 * </p>
 * has been defined for the given <i>object</i>, false
 * otherwise.
 * @param method_name
 * @param object
 * @param method_name
 */
export function method_exists (object, method_name) {
	return object[method_name] !== undefined && typeof object[method_name] === 'function'
}

/**
 * Checks if the object or class has a property
 * @link https://php.net/manual/en/function.property-exists.php
 * The class name or an object of the class to test for
 * </p>
 * The name of the property
 * </p>
 * null in case of an error.
 * @param object
 * @param property
 * @param property
 */
export function property_exists (object, property) {
	return object[property] !== undefined && typeof object[property] !== 'function'
}

/**
 * Checks if the trait exists
 * @since 5.4
 * @param traitname
 * @param autoload
 * @param traitname
 * @param autoload
 */
export function trait_exists (traitname, autoload) {
	throw new Error("Not implemented");
}

/**
 * Checks if the class has been defined
 * @link https://php.net/manual/en/function.class-exists.php
 * The class name. The name is matched in a case-insensitive manner.
 * </p>
 * Whether or not to call &link.autoload; by default.
 * </p>
 * false otherwise.
 * @param autoload
 * @param class_name
 * @param autoload
 */
export function class_exists (class_name, autoload = true) {
	throw new Error("Not implemented");
}

/**
 * Checks if the interface has been defined
 * @link https://php.net/manual/en/function.interface-exists.php
 * The interface name
 * </p>
 * Whether to call &link.autoload; or not by default.
 * </p>
 * <i>interface_name</i> has been defined, false otherwise.
 * @param interface_name
 * @param autoload
 * @param interface_name
 * @param autoload
 */
export function interface_exists (interface_name, autoload = true) {
	throw new Error("Not implemented");
}

/**
 * Return true if the given export function has been defined
 * @link https://php.net/manual/en/function.function-exists.php
 * The export function name, as a string.
 * </p>
 * @return bool true if <i>function_name</i> exists and is a
 * function, false otherwise.
 * </p>
 * <p>
 * This export function will return false for constructs, such as
 * <b>include_once</b> and <b>echo</b>.
 * @param function_name
 */
export function function_exists (function_name) {
	throw new Error("Not implemented");
}

/**
 * Creates an alias for a class
 * @link https://php.net/manual/en/function.class-alias.php
 * @param autoload
 * @param original
 * @param alias
 * @param autoload
 */
export function class_alias (original, alias, autoload = this.TRUE) {
	throw new Error("Not implemented");
}

/**
 * Returns an array with the names of included or required files
 * @link https://php.net/manual/en/function.get-included-files.php
 * @return string[] an array of the names of all files.
 * </p>
 * <p>
 * The script originally called is considered an "included file," so it will
 * be listed together with the files referenced by
 * <b>include</b> and family.
 * </p>
 * <p>
 * Files that are included or required multiple times only show up once in
 * the returned array.
 */
export function get_included_files () {
}

/**
 * Alias of <b>get_included_files</b>
 * @link https://php.net/manual/en/function.get-required-files.php
 * @return string[]
 */
export function get_required_files () {
}


/**
 * Checks if the object is of this class or has this class as one of its parents
 * @link https://php.net/manual/en/function.is-a.php
 * The tested object
 * </p>
 * The class name
 * </p>
 * If this parameter set to <b>FALSE</b>, string class name as <em><b>object</b></em>
 * is not allowed. This also prevents from calling autoloader if the class doesn't exist.
 * </p>
 * its parents, <b>FALSE</b> otherwise.
 * @param allow_string
 * @param object
 * @param class_name
 * @param allow_string
 */
export function is_a (object, class_name, allow_string = GLOBAL.FALSE) {
	return typeof object === class_name;
}


/**
 * Gets the properties of the given object
 * @link https://php.net/manual/en/function.get-object-vars.php
 * An object instance.
 * </p>
 * @return array an associative array of defined object accessible non-static properties
 * for the specified <i>object</i> in scope. If a property have
 * not been assigned a value, it will be returned with a null value.
 * @param object
 */
export function get_object_vars (object) {
	return Object.keys(object).filter(value => object.hasOwnProperty(value) && typeof object[value] !== 'function')
}


