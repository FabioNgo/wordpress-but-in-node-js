/**
 * Decodes data encoded with MIME base64
 * @link https://php.net/manual/en/function.base64-decode.php
 * @param string data <p>
 * The encoded data.
 * </p>
 * @param bool strict [optional] <p>
 * Returns false if input contains character from outside the base64
 * alphabet.
 * </p>
 * @return string|false the original data or false on failure. The returned data may be
 * binary.
 */
import GLOBAL from "../Core/GLOBAL";
import {ArithmeticError} from "../Core/Core_c";
import uuid from 'uuid';

export function base64_decode (data, strict = null) {
    return atob(data);
}

/**
 * Encodes data with MIME base64
 * @link https://php.net/manual/en/function.base64-encode.php
 * @param string data <p>
 * The data to encode.
 * </p>
 * @return string The encoded data, as a string.
 */
export function base64_encode (data) {
    return btoa(data)
}

/**
 * Absolute value
 * @link https://php.net/manual/en/function.abs.php
 * The numeric value to process
 * </p>
 * @return float|int The absolute value of number. If the
 * argument number is
 * of type float, the return type is also float,
 * otherwise it is integer (as float usually has a
 * bigger value range than integer).
 * @param number
 */
export function abs (number) {
    return Math.abs(number);
}

/**
 * Round fractions up
 * @link https://php.net/manual/en/function.ceil.php
 * The value to round
 * </p>
 * @return float|false value rounded up to the next highest
 * integer.
 * The return value of ceil is still of type
 * float as the value range of float is
 * usually bigger than that of integer.
 * @param value
 */
export function ceil (value) {
    return Math.ceil(value);
}

/**
 * Round fractions down
 * @link https://php.net/manual/en/function.floor.php
 * @param float value <p>
 * The numeric value to round
 * </p>
 * @return float|false value rounded to the next lowest integer.
 * The return value of floor is still of type
 * float because the value range of float is 
 * usually bigger than that of integer.
 */
export function floor (value) {
   return Math.floor(value);
}

/**
 * Returns the rounded value of val to specified precision (number of digits after the decimal point).
 * precision can also be negative or zero (default).
 * Note: PHP doesn't handle strings like "12,300.2" correctly by default. See converting from strings.
 * @link https://php.net/manual/en/function.round.php
 * The value to round
 * </p>
 * The optional number of decimal digits to round to.
 * </p>
 * One of PHP_ROUND_HALF_UP,
 * PHP_ROUND_HALF_DOWN,
 * PHP_ROUND_HALF_EVEN, or
 * PHP_ROUND_HALF_ODD.
 * </p>
 * @return float|false The rounded value
 * @param val
 * @param precision
 */
export function round (val:number, precision = 0) {
        return val.toFixed(precision)
}

/**
 * Sine
 * @link https://php.net/manual/en/function.sin.php
 * @param float arg <p>
 * A value in radians
 * </p>
 * @return float The sine of arg
 */
export function sin (arg) {
    return Math.sin(arg);
}

/**
 * Cosine
 * @link https://php.net/manual/en/function.cos.php
 * @param float arg <p>
 * An angle in radians 
 * </p>
 * @return float The cosine of arg
 */
export function cos (arg) {
    return Math.cos(arg);
}

/**
 * Tangent
 * @link https://php.net/manual/en/function.tan.php
 * @param float arg <p>
 * The argument to process in radians 
 * </p>
 * @return float The tangent of arg
 */
export function tan (arg) {
    return Math.tan(arg);
}

/**
 * Arc sine
 * @link https://php.net/manual/en/function.asin.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The arc sine of arg in radians
 */
export function asin (arg) {
    return Math.asin(arg);
}

/**
 * Arc cosine
 * @link https://php.net/manual/en/function.acos.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The arc cosine of arg in radians.
 */
export function acos (arg) {
    return Math.asin(arg);
}

/**
 * Arc tangent
 * @link https://php.net/manual/en/function.atan.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The arc tangent of arg in radians.
 */
export function atan (arg) {
    return Math.atan(arg);
}

/**
 * Inverse hyperbolic tangent
 * @link https://php.net/manual/en/function.atanh.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float Inverse hyperbolic tangent of arg
 */
export function atanh (arg) {
    return Math.atanh(arg);
}

/**
 * Arc tangent of two variables
 * @link https://php.net/manual/en/function.atan2.php
 * @param float y <p>
 * Dividend parameter
 * </p>
 * @param float x <p>
 * Divisor parameter
 * </p>
 * @return float The arc tangent of y/x 
 * in radians.
 */
export function atan2 (y, x) {
    return Math.atan2(y,x);
}

/**
 * Hyperbolic sine
 * @link https://php.net/manual/en/function.sinh.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The hyperbolic sine of arg
 */
export function sinh (arg) {
    return Math.sinh(arg);
}

/**
 * Hyperbolic cosine
 * @link https://php.net/manual/en/function.cosh.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The hyperbolic cosine of arg
 */
export function cosh (arg) {
    return Math.cosh(arg);
}

/**
 * Hyperbolic tangent
 * @link https://php.net/manual/en/function.tanh.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The hyperbolic tangent of arg
 */
export function tanh (arg) {
    return Math.tanh(arg);
}

/**
 * Inverse hyperbolic sine
 * @link https://php.net/manual/en/function.asinh.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The inverse hyperbolic sine of arg
 */
export function asinh (arg) {
    return Math.asinh(arg);
}

/**
 * Inverse hyperbolic cosine
 * @link https://php.net/manual/en/function.acosh.php
 * @param float arg <p>
 * The value to process
 * </p>
 * @return float The inverse hyperbolic cosine of arg
 */
export function acosh (arg) {
    return Math.acosh(arg);
}

/**
 * Returns exp(number) - 1, computed in a way that is accurate even
 when the value of number is close to zero
 * @link https://php.net/manual/en/function.expm1.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float 'e' to the power of arg minus one
 */
export function expm1 (arg) {
    return Math.expm1(arg);
}

/**
 * Returns log(1 + number), computed in a way that is accurate even when
 the value of number is close to zero
 * @link https://php.net/manual/en/function.log1p.php
 * @param float number <p>
 * The argument to process
 * </p>
 * @return float log(1 + number)
 */
export function log1p (number) {
    return Math.log1p(number);
}

/**
 * Get value of pi
 * @link https://php.net/manual/en/function.pi.php
 * @return float The value of pi as float.
 */
export function pi () {
    return Math.PI;
}

/**
 * Finds whether a value is a legal finite number
 * @link https://php.net/manual/en/function.is-finite.php
 * @param float val <p>
 * The value to check
 * </p>
 * @return bool true if val is a legal finite
 * number within the allowed range for a PHP float on this platform,
 * else false.
 */
export function is_finite (val) {
    return isFinite(val);
}

/**
 * Finds whether a value is not a number
 * @link https://php.net/manual/en/function.is-nan.php
 * @param float val <p>
 * The value to check
 * </p>
 * @return bool true if val is 'not a number',
 * else false.
 */
export function is_nan (val) {
    return isNaN(val);
}

/**
 * Integer division
 * @link https://php.net/manual/en/function.intdiv.php
 * @param dividend <p>Number to be divided.</p>
 * @param divisor <p>Number which divides the <b><i>dividend</i></b></p>
 * @return int <p>
 * If divisor is 0, a {@link DivisionByZeroError} exception is thrown.
 * If the <b><i>dividend</i></b> is <b>PHP_INT_MIN</b> and the <b><i>divisor</i></b> is -1,
 * then an {@link ArithmeticError} exception is thrown.
 * </p>
 * @since 7.0
 */
export function intdiv (dividend,  divisor) {
    if(divisor === 0 || (dividend === GLOBAL.PHP_INT_MIN && divisor === -1)){
        throw new ArithmeticError();
    }
    return Math.ceil(dividend/divisor);
}

/**
 * Finds whether a value is infinite
 * @link https://php.net/manual/en/function.is-infinite.php
 * @param float val <p>
 * The value to check
 * </p>
 * @return bool true if val is infinite, else false.
 */
export function is_infinite (val) {
    return !isFinite(val)
}

/**
 * Exponential expression
 * @link https://php.net/manual/en/function.pow.php
 * @param int|float base <p>
 * The base to use
 * </p>
 * @param int|float exp <p>
 * The exponent
 * </p>
 * @return int|float base raised to the power of exp.
 * If the result can be represented as integer it will be returned as type
 * integer, else it will be returned as type float.
 * If the power cannot be computed false will be returned instead.
 */
export function pow (base, exp) {
    return Math.pow(base,exp);
}

/**
 * Calculates the exponent of <constant>e</constant>
 * @link https://php.net/manual/en/function.exp.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float 'e' raised to the power of arg
 */
export function exp (arg) {
    return Math.exp(arg);
}

/**
 * Natural logarithm
 * @link https://php.net/manual/en/function.log.php
 * @param float arg <p>
 * The value to calculate the logarithm for
 * </p>
 * @param float base [optional] <p>
 * The optional logarithmic base to use 
 * (defaults to 'e' and so to the natural logarithm).
 * </p>
 * @return float The logarithm of arg to 
 * base, if given, or the
 * natural logarithm.
 */
export function log (arg, base = null) {
    if(base === null){
        return Math.log(arg);
    }else {
        return Math.log(arg)/Math.log(base);
    }
}

/**
 * Base-10 logarithm
 * @link https://php.net/manual/en/function.log10.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The base-10 logarithm of arg
 */
export function log10 (arg) {
    return Math.log10(arg);
}

/**
 * Square root
 * @link https://php.net/manual/en/function.sqrt.php
 * @param float arg <p>
 * The argument to process
 * </p>
 * @return float The square root of arg
 * or the special value NAN for negative numbers.
 */
export function sqrt (arg) {
    return Math.sqrt(arg);
}

/**
 * Calculate the length of the hypotenuse of a right-angle triangle
 * @link https://php.net/manual/en/function.hypot.php
 * @param float x <p>
 * Length of first side
 * </p>
 * @param float y <p>
 * Length of second side
 * </p>
 * @return float Calculated length of the hypotenuse
 */
export function hypot (x, y) {
    return Math.hypot(x,y);
}

/**
 * Binary to decimal
 * @link https://php.net/manual/en/function.bindec.php
 * @param string binary_string <p>
 * The binary string to convert
 * </p>
 * @return int|float The decimal value of binary_string
 */
export function bindec (binary_string) {
    return parseInt(binary_string,2);
}

/**
 * Hexadecimal to decimal
 * @link https://php.net/manual/en/function.hexdec.php
 * @param string hex_string <p>
 * The hexadecimal string to convert
 * </p>
 * @return int|float The decimal representation of hex_string
 */
export function hexdec (hex_string) {
    return parseInt(hex_string,16);
}

/**
 * Octal to decimal
 * @link https://php.net/manual/en/function.octdec.php
 * @param string octal_string <p>
 * The octal string to convert
 * </p>
 * @return int|float The decimal representation of octal_string
 */
export function octdec (octal_string) {
    return parseInt(octal_string,8);
}

/**
 * Decimal to binary
 * @link https://php.net/manual/en/function.decbin.php
 * @param int number <p>
 * Decimal value to convert
 * </p>
 * <table>
 * Range of inputs on 32-bit machines
 * <tr valign="top">
 * <td>positive number</td>
 * <td>negative number</td>
 * <td>return value</td>
 * </tr>
 * <tr valign="top">
 * <td>0</td>
 * <td></td>
 * <td>0</td>
 * </tr>
 * <tr valign="top">
 * <td>1</td>
 * <td></td>
 * <td>1</td>
 * </tr>
 * <tr valign="top">
 * <td>2</td>
 * <td></td>
 * <td>10</td>
 * </tr>
 * <tr valign="top">
 * ... normal progression ...</td>
 * </tr>
 * <tr valign="top">
 * <td>2147483646</td>
 * <td></td>
 * <td>1111111111111111111111111111110</td>
 * </tr>
 * <tr valign="top">
 * <td>2147483647 (largest signed integer)</td>
 * <td></td>
 * <td>1111111111111111111111111111111 (31 1's)</td>
 * </tr>
 * <tr valign="top">
 * <td>2147483648</td>
 * <td>-2147483648</td>
 * <td>10000000000000000000000000000000</td>
 * </tr>
 * <tr valign="top">
 * ... normal progression ...</td>
 * </tr>
 * <tr valign="top">
 * <td>4294967294</td>
 * <td>-2</td>
 * <td>11111111111111111111111111111110</td>
 * </tr>
 * <tr valign="top">
 * <td>4294967295 (largest unsigned integer)</td>
 * <td>-1</td>
 * <td>11111111111111111111111111111111 (32 1's)</td>
 * </tr>
 * </table>
 * <table>
 * Range of inputs on 64-bit machines
 * <tr valign="top">
 * <td>positive number</td>
 * <td>negative number</td>
 * <td>return value</td>
 * </tr>
 * <tr valign="top">
 * <td>0</td>
 * <td></td>
 * <td>0</td>
 * </tr>
 * <tr valign="top">
 * <td>1</td>
 * <td></td>
 * <td>1</td>
 * </tr>
 * <tr valign="top">
 * <td>2</td>
 * <td></td>
 * <td>10</td>
 * </tr>
 * <tr valign="top">
 * ... normal progression ...</td>
 * </tr>
 * <tr valign="top">
 * <td>9223372036854775806</td>
 * <td></td>
 * <td>111111111111111111111111111111111111111111111111111111111111110</td>
 * </tr>
 * <tr valign="top">
 * <td>9223372036854775807 (largest signed integer)</td>
 * <td></td>
 * <td>111111111111111111111111111111111111111111111111111111111111111 (31 1's)</td>
 * </tr>
 * <tr valign="top">
 * <td></td>
 * <td>-9223372036854775808</td>
 * <td>1000000000000000000000000000000000000000000000000000000000000000</td>
 * </tr>
 * <tr valign="top">
 * ... normal progression ...</td>
 * </tr>
 * <tr valign="top">
 * <td></td>
 * <td>-2</td>
 * <td>1111111111111111111111111111111111111111111111111111111111111110</td>
 * </tr>
 * <tr valign="top">
 * <td></td>
 * <td>-1</td>
 * <td>1111111111111111111111111111111111111111111111111111111111111111 (64 1's)</td>
 * </tr>
 * </table>
 * @return string Binary string representation of number
 */
export function decbin (number) {
    return number.toString(2);
}

/**
 * Decimal to octal
 * @link https://php.net/manual/en/function.decoct.php
 * @param int number <p>
 * Decimal value to convert
 * </p>
 * @return string Octal string representation of number
 */
export function decoct (number) {
    return number.toString(8);
}

/**
 * Decimal to hexadecimal
 * @link https://php.net/manual/en/function.dechex.php
 * @param int number <p>
 * Decimal value to convert
 * </p>
 * @return string Hexadecimal string representation of number
 */
export function dechex (number) {
    return number.toString(16);
}






/**
 * Return current Unix timestamp with microseconds
 * @link https://php.net/manual/en/function.microtime.php
 * @param bool get_as_float [optional] <p>
 * When called without the optional argument, this function returns the string
 * "msec sec" where sec is the current time measured in the number of
 * seconds since the Unix Epoch (0:00:00 January 1, 1970 GMT), and
 * msec is the microseconds part.
 * Both portions of the string are returned in units of seconds.
 * </p>
 * <p>
 * If the optional get_as_float is set to
 * true then a float (in seconds) is returned.
 * </p>
 * @return string|float
 */
export function microtime (get_as_float = null) {
    return new Date().getTime();
}

/**
 * Generate a unique ID
 * @link https://php.net/manual/en/function.uniqid.php
 * @param string prefix [optional] <p>
 * Can be useful, for instance, if you generate identifiers
 * simultaneously on several hosts that might happen to generate the
 * identifier at the same microsecond.
 * </p>
 * <p>
 * With an empty prefix, the returned string will
 * be 13 characters long. If more_entropy is
 * true, it will be 23 characters.
 * </p>
 * @param bool more_entropy [optional] <p>
 * If set to true, uniqid will add additional
 * entropy (using the combined linear congruential generator) at the end
 * of the return value, which should make the results more unique.
 * </p>
 * @return string the unique identifier, as a string.
 */
export function uniqid () {
    return uuid.v4();
}
