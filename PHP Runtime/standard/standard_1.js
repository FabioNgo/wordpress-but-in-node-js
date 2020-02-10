import esrever from 'esrever';
import * as path from 'path';

/**
 * Make a string uppercase
 * @link https://php.net/manual/en/export function.strtoupper.php
 * @param string string <p>
 * The input string.
 * </p>
 * @return string the uppercased string.
 */
export function strtoupper (string: string) {
	return string.toUpperCase();
}

/**
 * Make a string lowercase
 * @link https://php.net/manual/en/export function.strtolower.php
 * The input string.
 * </p>
 * @return string the lowercased string.
 * @param str
 */
export function strtolower (str: string) {
	return str.toLowerCase();
}

/**
 * Find the position of the first occurrence of a substring in a string
 * @link https://php.net/manual/en/export function.strpos.php
 * The string to search in
 * </p>
 * If <b>needle</b> is not a string, it is converted
 * to an integer and applied as the ordinal value of a character.
 * </p>
 * If specified, search will start this number of characters counted from
 * the beginning of the string. Unlike {@see strrpos()} and {@see strripos()}, the offset cannot be negative.
 * </p>
 * @return int|false <p>
 * Returns the position where the needle exists relative to the beginnning of
 * the <b>haystack</b> string (independent of search direction
 * or offset).
 * Also note that string positions start at 0, and not 1.
 * </p>
 * <p>
 * Returns <b>FALSE</b> if the needle was not found.
 * </p>
 * @param haystack
 * @param needle
 * @param offset
 */
export function strpos (haystack: string, needle: string, offset = 0) {
	const index = haystack.indexOf(needle, offset);
	return index === -1 ? false : index;
}

/**
 * Find position of first occurrence of a case-insensitive string
 * @link https://php.net/manual/en/export function.stripos.php
 * The string to search in
 * </p>
 * Note that the needle may be a string of one or
 * more characters.
 * </p>
 * <p>
 * If needle is not a string, it is converted to
 * an integer and applied as the ordinal value of a character.
 * </p>
 * The optional offset parameter allows you
 * to specify which character in haystack to
 * start searching. The position returned is still relative to the
 * beginning of haystack.
 * </p>
 * @return int|false If needle is not found,
 * stripos will return boolean false.
 * @param haystack
 * @param needle
 * @param offset
 */
export function stripos (haystack: string, needle: string, offset = null) {
	strpos(haystack.toLowerCase(), needle.toLowerCase(), offset);
}

/**
 * Find the position of the last occurrence of a substring in a string
 * @link https://php.net/manual/en/export function.strrpos.php
 * The string to search in.
 * </p>
 * If <b>needle</b> is not a string, it is converted to an integer and applied as the ordinal value of a character.
 * </p>
 * If specified, search will start this number of characters counted from the beginning of the string. If the value is
 *     negative, search will instead start from that many characters from the end of the string, searching backwards.
 * </p>
 * @return int|false <p>
 * Returns the position where the needle exists relative to the beginning of
 * the <b>haystack</b> string (independent of search direction
 * or offset).
 * Also note that string positions start at 0, and not 1.
 * </p>
 * <p>
 * Returns <b>FALSE</b> if the needle was not found.
 * </p>
 * @param haystack
 * @param needle
 * @param offset
 */
export function strrpos (haystack: string, needle: string, offset = 0) {
	const index = haystack.lastIndexOf(needle, offset);
	return index === -1 ? false : index;
}

/**
 * Find position of last occurrence of a case-insensitive string in a string
 * @link https://php.net/manual/en/export function.strripos.php
 * The string to search in
 * </p>
 * Note that the needle may be a string of one or
 * more characters.
 * </p>
 * The offset parameter may be specified to begin
 * searching an arbitrary number of characters into the string.
 * </p>
 * <p>
 * Negative offset values will start the search at
 * offset characters from the
 * start of the string.
 * </p>
 * @return int|false the numerical position of the last occurrence of
 * needle. Also note that string positions start at 0,
 * and not 1.
 * </p>
 * <p>
 * If needle is not found, false is returned.
 * @param haystack
 * @param needle
 * @param offset
 */
export function strripos (haystack: string, needle: string, offset = null) {
	return strrpos(haystack.toLowerCase(), needle.toLowerCase(), offset);
}

/**
 * Reverse a string
 * @link https://php.net/manual/en/export function.strrev.php
 * @param string string <p>
 * The string to be reversed.
 * </p>
 * @return string the reversed string.
 */
export function strrev (string: string) {
	return esrever.reverse(string);
}


/**
 * Inserts HTML line breaks before all newlines in a string
 * @link https://php.net/manual/en/export function.nl2br.php
 * @param string string <p>
 * The input string.
 * </p>
 * @param bool is_xhtml [optional] <p>
 * Whenever to use XHTML compatible line breaks or not.
 * </p>
 * @return string the altered string.
 */
export function nl2br (string: string, is_xhtml = true) {
	return string.replace('\n', '<br />');
}

/**
 * Returns filename component of path
 * @link https://php.net/manual/en/export function.basename.php
 * A path.
 * </p>
 * <p>
 * On Windows, both slash (/) and backslash
 * (\) are used as directory separator character. In
 * other environments, it is the forward slash (/).
 * </p>
 * If the filename ends in suffix this will also
 * be cut off.
 * </p>
 * @return string the base name of the given path.
 * @param _path
 * @param suffix
 */
export function basename (_path: string, suffix = null) {
	path.basename(_path, suffix);
}


/**
 * Find first occurrence of a string
 * @link https://php.net/manual/en/function.strstr.php
 * The input string.
 * </p>
 * If needle is not a string, it is converted to
 * an integer and applied as the ordinal value of a character.
 * </p>
 * If true, strstr returns
 * the part of the haystack before the first
 * occurrence of the needle.
 * </p>
 * @return string|false the portion of string, or false if needle
 * is not found.
 * @param haystack
 * @param needle
 * @param before_needle
 */
export function strstr (haystack: string, needle: string, before_needle = null) {
	const index = strpos(haystack, needle);
	if (index === false) {
		return false;
	}
	if (before_needle === true) {
		return haystack.substring(0, index);
	} else {
		return haystack.substr(index);
	}
}

/**
 * Case-insensitive <export function>strstr</export function>
 * @link https://php.net/manual/en/export function.stristr.php
 * The string to search in
 * </p>
 * If needle is not a string, it is converted to
 * an integer and applied as the ordinal value of a character.
 * </p>
 * If true, stristr
 * returns the part of the haystack before the
 * first occurrence of the needle.
 * </p>
 * @return string|false the matched substring. If needle is not
 * found, returns false.
 * @param haystack
 * @param needle
 * @param before_needle
 */
export function stristr (haystack: string, needle: string, before_needle = null) {
	return strstr(haystack.toLowerCase(), needle.toLowerCase(), before_needle);
}

/**
 * Find the last occurrence of a character in a string
 * @link https://php.net/manual/en/export function.strrchr.php
 * The string to search in
 * </p>
 * If <b>needle</b> contains more than one character,
 * only the first is used. This behavior is different from that of {@see strstr()}.
 * </p>
 * <p>
 * If <b>needle</b> is not a string, it is converted to
 * an integer and applied as the ordinal value of a character.
 * </p>
 * @return string|false <p>
 * This export function returns the portion of string, or <b>FALSE</b> if
 * <b>needle</b> is not found.
 * </p>
 * @param haystack
 * @param needle
 */
export function strrchr (haystack: string, needle: string) {
	return haystack.lastIndexOf(needle);
}


/**
 * Convert a string to an array
 * @link https://php.net/manual/en/export function.str-split.php
 * @param string string <p>
 * The input string.
 * </p>
 * @param split_length
 * Maximum length of the chunk.
 * </p>
 * @return array If the optional split_length parameter is
 * specified, the returned array will be broken down into chunks with each
 * being split_length in length, otherwise each chunk
 * will be one character in length.
 * </p>
 * <p>
 * false is returned if split_length is less than 1.
 * If the split_length length exceeds the length of
 * string, the entire string is returned as the first
 * (and only) array element.
 */
export function str_split (string: string, split_length = 1) {
	if (split_length < 1) {
		return false;
	} else {
		return string.match(new RegExp('.{1,' + split_length + '}', 'g'));
	}
}


/**
 * Return part of a string
 * @link https://php.net/manual/en/export function.substr.php
 * @param string string <p>
 * The input string.
 * </p>
 * @param start
 * @param length
 * If start is non-negative, the returned string
 * will start at the start'th position in
 * string, counting from zero. For instance,
 * in the string 'abcdef', the character at
 * position 0 is 'a', the
 * character at position 2 is
 * 'c', and so forth.
 * </p>
 * <p>
 * If start is negative, the returned string
 * will start at the start'th character
 * from the end of string.
 * </p>
 * <p>
 * If string is less than or equal to
 * start characters long, false will be returned.
 * </p>
 * <p>
 * Using a negative start
 * </p>
 * <pre>
 * <?php
 * rest = substr("abcdef", -1);    // returns "f"
 * rest = substr("abcdef", -2);    // returns "ef"
 * rest = substr("abcdef", -3, 1); // returns "d"
 * ?>
 * </pre>
 * If length is given and is positive, the string
 * returned will contain at most length characters
 * beginning from start (depending on the length of
 * string).
 * </p>
 * <p>
 * If length is given and is negative, then that many
 * characters will be omitted from the end of string
 * (after the start position has been calculated when a
 * start is negative). If
 * start denotes a position beyond this truncation,
 * an empty string will be returned.
 * </p>
 * <p>
 * If length is given and is 0,
 * false or &null; an empty string will be returned.
 * </p>
 * Using a negative length:
 * <pre>
 * <?php
 * rest = substr("abcdef", 0, -1);  // returns "abcde"
 * rest = substr("abcdef", 2, -1);  // returns "cde"
 * rest = substr("abcdef", 4, -4);  // returns false
 * rest = substr("abcdef", -3, -1); // returns "de"
 * ?>
 * </pre>
 * @return string|false the extracted part of string or false on failure.
 */
export function substr (string: string, start, length = null) {
	
	string.substr(start, length);
}


/**
 * Strip whitespace (or other characters) from the end of a string.
 * Without the second parameter, rtrim() will strip these characters:
 * <ul>
 * <li>" " (ASCII 32 (0x20)), an ordinary space.
 * <li>"\t" (ASCII 9 (0x09)), a tab.
 * <li>"\n" (ASCII 10 (0x0A)), a new line (line feed).
 * <li>"\r" (ASCII 13 (0x0D)), a carriage return.
 * <li>"\0" (ASCII 0 (0x00)), the NUL-byte.
 * <li>"\x0B" (ASCII 11 (0x0B)), a vertical tab.
 * </ul>
 * @link https://php.net/manual/en/export function.rtrim.php
 * The input string.
 * </p>
 * You can also specify the characters you want to strip, by means
 * of the charlist parameter.
 * Simply list all characters that you want to be stripped. With
 * .. you can specify a range of characters.
 * </p>
 * @return string the modified string.
 * @param str
 * @param charlist
 */
export function rtrim (str:string) {
	return str.trim();
}

/**
 * Replace all occurrences of the search string with the replacement string
 * @link https://php.net/manual/en/export function.str-replace.php
 * The value being searched for, otherwise known as the needle.
 * An array may be used to designate multiple needles.
 * </p>
 * The replacement value that replaces found search
 * values. An array may be used to designate multiple replacements.
 * </p>
 * The string or array being searched and replaced on,
 * otherwise known as the haystack.
 * </p>
 * <p>
 * If subject is an array, then the search and
 * replace is performed with every entry of
 * subject, and the return value is an array as
 * well.
 * </p>
 * @return string|string[] This export function returns a string or an array with the replaced values.
 * @param search
 * @param replace
 * @param subject
 */
export function str_replace (search:string, replace:string, subject:string)
{
	subject.split(search).join(replace)
}

/**
 * Repeat a string
 * @link https://php.net/manual/en/export function.str-repeat.php
 * The string to be repeated.
 * </p>
 * Number of time the input string should be
 * repeated.
 * </p>
 * <p>
 * multiplier has to be greater than or equal to 0.
 * If the multiplier is set to 0, the export function
 * will return an empty string.
 * </p>
 * @return string the repeated string.
 * @param input
 * @param multiplier
 */
export function str_repeat (input:string, multiplier:number) {
	let result = "";
	Array.from(Array(multiplier).keys()).forEach(value => result+=input);
	return result;


}



/**
 * Strip whitespace (or other characters) from the beginning and end of a string
 * @link https://php.net/manual/en/export function.trim.php
 * @param string str <p>
 * The string that will be trimmed.
 * </p>
 * @param string charlist [optional] <p>
 * Optionally, the stripped characters can also be specified using
 * the charlist parameter.
 * Simply list all characters that you want to be stripped. With
 * .. you can specify a range of characters.
 * </p>
 * @return string The trimmed string.
 */
export function trim (str, charlist = ' \t\n\r\0\x0B') {
	return str.trim()
}




/**
 * Split a string by string
 * @link https://php.net/manual/en/export function.explode.php
 * @param string delimiter <p>
 * The boundary string.
 * </p>
 * @param string string <p>
 * The input string.
 * </p>
 * @param int limit [optional] <p>
 * If limit is set and positive, the returned array will contain
 * a maximum of limit elements with the last
 * element containing the rest of string.
 * </p>
 * <p>
 * If the limit parameter is negative, all components
 * except the last -limit are returned.
 * </p>
 * <p>
 * If the limit parameter is zero, then this is treated as 1.
 * </p>
 * @return string[]|false If delimiter is an empty string (""),
 * explode will return false.
 * If delimiter contains a value that is not
 * contained in string and a negative
 * limit is used, then an empty array will be
 * returned. For any other limit, an array containing
 * string will be returned.
 */
export function explode (delimiter, string) {
	return string.split(delimiter)
}

/**
 * Join array elements with a string
 * @link https://php.net/manual/en/export function.implode.php
 * Defaults to an empty string. This is not the preferred usage of
 * implode as glue would be
 * the second parameter and thus, the bad prototype would be used.
 * </p>
 * The array of strings to implode.
 * </p>
 * @return string a string containing a string representation of all the array
 * elements in the same order, with the glue string between each element.
 * @param glue
 * @param pieces
 */
export function implode (glue = '', pieces:[])
{
	return pieces.join(glue);
}

/**
 * &Alias; <export function>implode</export function>
 * @link https://php.net/manual/en/export function.join.php
 * @param string glue [optional] <p>
 * Defaults to an empty string. This is not the preferred usage of
 * implode as glue would be
 * the second parameter and thus, the bad prototype would be used.
 * </p>
 * @param array pieces <p>
 * The array of strings to implode.
 * </p>
 * @return string a string containing a string representation of all the array
 * elements in the same order, with the glue string between each element.
 */
export function join (glue = '', pieces) {
	return pieces.join(glue);
}

