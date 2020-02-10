// Start of Core v.5.3.6-13ubuntu3.2

/**
 * Created by typecasting to object.
 * @link https://php.net/manual/en/reserved.classes.php
 */
export class stdClass {
}

/**
 * @link https://wiki.php.net/rfc/iterable
 */
export interface iterable {
}

/**
 * Interface to detect if a export class is traversable using foreach.
 * Abstract base export interface that cannot be implemented alone.
 * Instead it must be implemented by either {@see IteratorAggregate} or {@see Iterator}.
 *
 * @link https://php.net/manual/en/class.traversable.php
 */
export interface Traversable extends iterable {
}

/**
 * Interface to create an external Iterator.
 * @link https://php.net/manual/en/class.iteratoraggregate.php
 */
export interface IteratorAggregate extends Traversable {
	
	/**
	 * Retrieve an external iterator
	 * @link https://php.net/manual/en/iteratoraggregate.getiterator.php
	 * @return Traversable An instance of an object implementing <b>Iterator</b> or
	 * <b>Traversable</b>
	 * @throws Exception on failure.
	 */
	getIterator ();
}

/**
 * Interface for external iterators or objects that can be iterated
 * themselves internally.
 * @link https://php.net/manual/en/class.iterator.php
 */
export interface Iterator extends Traversable {
	
	/**
	 * Return the current element
	 * @link https://php.net/manual/en/iterator.current.php
	 * @return mixed Can return any type.
	 */
	current ();
	
	/**
	 * Move forward to next element
	 * @link https://php.net/manual/en/iterator.next.php
	 * @return void Any returned value is ignored.
	 */
	
	next ();
	
	/**
	 * Return the key of the current element
	 * @link https://php.net/manual/en/iterator.key.php
	 * @return string|float|int|bool|null scalar on success, or null on failure.
	 */
	
	key ();
	
	/**
	 * Checks if current position is valid
	 * @link https://php.net/manual/en/iterator.valid.php
	 * @return bool The return value will be casted to boolean and then evaluated.
	 * Returns true on success or false on failure.
	 */
	
	valid ();
	
	/**
	 * Rewind the Iterator to the first element
	 * @link https://php.net/manual/en/iterator.rewind.php
	 * @return void Any returned value is ignored.
	 */
	
	rewind ();
}

/**
 * Interface to provide accessing objects as arrays.
 * @link https://php.net/manual/en/class.arrayaccess.php
 */
export interface ArrayAccess {
	
	/**
	 * Whether a offset exists
	 * @link https://php.net/manual/en/arrayaccess.offsetexists.php
	 * An offset to check for.
	 * </p>
	 * @return bool true on success or false on failure.
	 * </p>
	 * <p>
	 * The return value will be casted to boolean if non-boolean was returned.
	 * @param offset
	 */
	offsetExists (offset);
	
	/**
	 * Offset to retrieve
	 * @link https://php.net/manual/en/arrayaccess.offsetget.php
	 * The offset to retrieve.
	 * </p>
	 * @return mixed Can return all value types.
	 * @param offset
	 */
	
	offsetGet (offset);
	
	/**
	 * Offset to set
	 * @link https://php.net/manual/en/arrayaccess.offsetset.php
	 * The offset to assign the value to.
	 * </p>
	 * The value to set.
	 * </p>
	 * @param value
	 * @param offset
	 * @param value
	 */
	offsetSet (offset, value);
	
	/**
	 * Offset to unset
	 * @link https://php.net/manual/en/arrayaccess.offsetunset.php
	 * The offset to unset.
	 * </p>
	 * @return void
	 * @param offset
	 */
	
	offsetUnset (offset);
}

/**
 * Interface for customized serializing.
 * @link https://php.net/manual/en/class.serializable.php
 */
export interface Serializable {
	
	/**
	 * String representation of object
	 * @link https://php.net/manual/en/serializable.serialize.php
	 * @return string the string representation of the object or null
	 */
	serialize ();
	
	/**
	 * Constructs the object
	 * @link https://php.net/manual/en/serializable.unserialize.php
	 * The string representation of the object.
	 * </p>
	 * @return void
	 * @param serialized
	 */
	
	unserialize (serialized);
}


/**
 * Throwable is the base export interface for any object that can be thrown via a throw statement in PHP 7,
 * including Error and Exception.
 * @link https://php.net/manual/en/class.throwable.php
 * @since 7.0
 */
export interface Throwable {
	
	/**
	 * Gets the message
	 * @link https://php.net/manual/en/throwable.getmessage.php
	 * @return string
	 * @since 7.0
	 */
	getMessage ();
	
	/**
	 * Gets the exception code
	 * @link https://php.net/manual/en/throwable.getcode.php
	 * @return int <p>
	 * Returns the exception code as integer in
	 * {@see Exception} but possibly as other type in
	 * {@see Exception} descendants (for example as
	 * string in {@see PDOException}).
	 * </p>
	 * @since 7.0
	 */
	
	
	getCode ();
	
	/**
	 * Gets the file in which the exception occurred
	 * @link https://php.net/manual/en/throwable.getfile.php
	 * @return string Returns the name of the file from which the object was thrown.
	 * @since 7.0
	 */
	
	
	getFile ();
	
	/**
	 * Gets the line on which the object was instantiated
	 * @link https://php.net/manual/en/throwable.getline.php
	 * @return int Returns the line number where the thrown object was instantiated.
	 * @since 7.0
	 */
	
	
	getLine ();
	
	/**
	 * Gets the stack trace
	 * @link https://php.net/manual/en/throwable.gettrace.php
	 * @return array <p>
	 * Returns the stack trace as an array in the same format as
	 * {@see debug_backtrace()}.
	 * </p>
	 * @since 7.0
	 */
	
	
	getTrace ();
	
	/**
	 * Gets the stack trace as a string
	 * @link https://php.net/manual/en/throwable.gettraceasstring.php
	 * @return string Returns the stack trace as a string.
	 * @since 7.0
	 */
	
	
	
	getTraceAsString ();
	
	/**
	 * Returns the previous Throwable
	 * @link https://php.net/manual/en/throwable.getprevious.php
	 * @return Throwable Returns the previous {@see Throwable} if available, or <b>NULL</b> otherwise.
	 * @since 7.0
	 */
	
	
	
	getPrevious ();
	
	/**
	 * Gets a string representation of the thrown object
	 * @link https://php.net/manual/en/throwable.tostring.php
	 * @return string <p>Returns the string representation of the thrown object.</p>
	 * @since 7.0
	 */
	
	
	
	toString ();
}

/**
 * Exception is the base export class for
 * all Exceptions.
 * @link https://php.net/manual/en/class.exception.php
 */
export class Exception implements Throwable {
	message;
	code;
	file;
	line;
	
	
	/**
	 * Clone the exception
	 * Tries to clone the Exception, which results in Fatal error.
	 * @link https://php.net/manual/en/exception.clone.php
	 */
	
	
	
	clone () {
	}
	
	/**
	 * Construct the exception. Note: The message is NOT binary safe.
	 * @link https://php.net/manual/en/exception.construct.php
	 * @param string message [optional] The Exception message to throw.
	 * @param int code [optional] The Exception code.
	 * @param Throwable previous [optional] The previous throwable used for the exception chaining.
	 */
	;
	
	constructor (message = '', code = 0,
	             previous: Throwable = null,
	) {
	}
	
	/**
	 * Gets the Exception message
	 * @link https://php.net/manual/en/exception.getmessage.php
	 * @return string the Exception message as a string.
	 */
	
	
	getMessage () {
	}
	
	/**
	 * Gets the Exception code
	 * @link https://php.net/manual/en/exception.getcode.php
	 * @return mixed|int the exception code as integer in
	 * <b>Exception</b> but possibly as other type in
	 * <b>Exception</b> descendants (for example as
	 * string in <b>PDOException</b>).
	 */
	
	
	getCode () {
	}
	
	/**
	 * Gets the file in which the exception occurred
	 * @link https://php.net/manual/en/exception.getfile.php
	 * @return string the filename in which the exception was created.
	 */
	
	
	getFile () {
	}
	
	/**
	 * Gets the line in which the exception occurred
	 * @link https://php.net/manual/en/exception.getline.php
	 * @return int the line number where the exception was created.
	 */
	
	
	getLine () {
	}
	
	/**
	 * Gets the stack trace
	 * @link https://php.net/manual/en/exception.gettrace.php
	 * @return array the Exception stack trace as an array.
	 */
	
	
	getTrace () {
	}
	
	/**
	 * Returns previous Exception
	 * @link https://php.net/manual/en/exception.getprevious.php
	 * @return Exception the previous <b>Exception</b> if available
	 * or null otherwise.
	 */
	
	
	getPrevious () {
	}
	
	/**
	 * Gets the stack trace as a string
	 * @link https://php.net/manual/en/exception.gettraceasstring.php
	 * @return string the Exception stack trace as a string.
	 */
	
	
	getTraceAsString () {
	}
	
	/**
	 * String representation of the exception
	 * @link https://php.net/manual/en/exception.tostring.php
	 * @return string the string representation of the exception.
	 */
	toString () {
	}
	
	wakeup () {
	}
}

/**
 * Error is the base export class for all internal PHP error exceptions.
 * @link https://php.net/manual/en/class.error.php
 * @since 7.0
 */
export class Error implements Throwable {
	
	/**
	 * Construct the error object.
	 * @link https://php.net/manual/en/error.construct.php
	 * @param message
	 * @param code
	 * @param previous
	 */
	
	
	constructor (message = '', code = 0, previous: Throwable = null) {
		
	}
	
	/***
	 * Gets the message
	 * @link https://php.net/manual/en/throwable.getmessage.php
	 * @return string
	 * @since 7.0
	 */
	
	
	getMessage () {
	}
	
	/**
	 * Gets the exception code
	 * @link https://php.net/manual/en/throwable.getcode.php
	 * @return int <p>
	 * Returns the exception code as integer in
	 * {@see Exception} but possibly as other type in
	 * {@see Exception} descendants (for example as
	 * string in {@see PDOException}).
	 * </p>
	 * @since 7.0
	 */
	
	
	getCode () {
	}
	
	
	/**
	 * Gets the file in which the exception occurred
	 * @link https://php.net/manual/en/throwable.getfile.php
	 * @return string Returns the name of the file from which the object was thrown.
	 * @since 7.0
	 */
	
	
	getFile () {
	}
	
	
	/**
	 * Gets the line on which the object was instantiated
	 * @link https://php.net/manual/en/throwable.getline.php
	 * @return int Returns the line number where the thrown object was instantiated.
	 * @since 7.0
	 */
	
	
	getLine () {
	}
	
	
	/**
	 * Gets the stack trace
	 * @link https://php.net/manual/en/throwable.gettrace.php
	 * @return array <p>
	 * Returns the stack trace as an array in the same format as
	 * {@see debug_backtrace()}.
	 * </p>
	 * @since 7.0
	 */
	
	
	getTrace () {
	}
	
	/**
	 * Gets the stack trace as a string
	 * @link https://php.net/manual/en/throwable.gettraceasstring.php
	 * @return string Returns the stack trace as a string.
	 * @since 7.0
	 */
	
	getTraceAsString () {
	}
	
	/**
	 * Returns the previous Throwable
	 * @link https://php.net/manual/en/throwable.getprevious.php
	 * @return Throwable Returns the previous {@see Throwable} if available, or <b>NULL</b> otherwise.
	 * @since 7.0
	 */
	
	
	getPrevious () {
	}
	
	/**
	 * Gets a string representation of the thrown object
	 * @link https://php.net/manual/en/throwable.tostring.php
	 * @return string <p>Returns the string representation of the thrown object.</p>
	 * @since 7.0
	 */
	__toString () {
	}
	
	/**
	 * Clone the error
	 * Error can not be clone, so this method results in fatal error.
	 * @return void
	 * @link https://php.net/manual/en/error.clone.php
	 */
	
	
	clone () {
	}
	
	wakeup () {
	}
}

/**
 * There are three scenarios where a TypeError may be thrown.
 * The first is where the argument type being passed to a  does not match its corresponding declared
 * parameter type. The second is where a value being returned from a  does not match the declared
 * return type. The third is where an invalid number of arguments are passed to a built-in PHP  (strict mode
 * only).
 * @link https://php.net/manual/en/class.typeerror.php
 * @since 7.0
 */
export class TypeError extends Error {
	
}



/**
 * ArgumentCountError is thrown when too few arguments are passed to a user
 * defined routine.
 *
 * @since 7.1
 * @see https://php.net/migration71.incompatible#migration71.incompatible.too-few-arguments-exception
 */
export class ArgumentCountError extends TypeError {
}

/**
 * ArithmeticError is thrown when an error occurs while performing mathematical operations.
 * In PHP 7.0, these errors include attempting to perform a bitshift by a negative amount,
 * and any call to {@see intdiv()} that would result in a value outside the possible bounds of an integer.
 * @link https://php.net/manual/en/class.arithmeticerror.php
 * @since 7.0
 */
export class ArithmeticError extends Error {
	
}

/**
 * export class CompileError
 * @link https://secure.php.net/manual/en/class.compileerror.php
 * @since 7.3
 */
export class CompileError extends Error {
	
}

/**
 * DivisionByZeroError is thrown when an attempt is made to divide a number by zero.
 * @link https://php.net/manual/en/class.divisionbyzeroerror.php
 * @since 7.0
 */
export class DivisionByZeroError extends ArithmeticError {
	
}

/**
 * An Error Exception.
 * @link https://php.net/manual/en/class.errorexception.php
 */
export class ErrorException extends Exception {
	
	severity;
	
	
	/**
	 * Constructs the exception
	 * @link https://php.net/manual/en/errorexception.construct.php
	 * @param message
	 * @param code
	 * @param severity
	 * @param filename
	 * @param lineno
	 * @param previous
	 */
	
	
	constructor (message = '', code = 0, severity = 1, filename = '', lineno = '', previous = null) {
		super();
	}
	
	/**
	 * Gets the exception severity
	 * @link https://php.net/manual/en/errorexception.getseverity.php
	 * @return int the severity level of the exception.
	 */
	
	;
	
	getSeverity () {
	}
}

/**
 * export class used to represent anonymous s.
 * <p>Anonymous s, implemented in PHP 5.3, yield objects of this type.
 * This fact used to be considered an implementation detail, but it can now be relied upon.
 * Starting with PHP 5.4, this export class has methods that allow further control of the anonymous  after it has been
 * created.
 * <p>Besides the methods listed here, this export class also has an __invoke method.
 * This is for consistency with other classes that implement calling magic, as this method is not used for calling the
 * .
 * @link https://secure.php.net/manual/en/class.closure.php
 */


export class Closure {
	
	/**
	 * This method exists only to disallow instantiation of the Closure class.
	 * Objects of this export class are created in the fashion described on the anonymous s page.
	 */
	
	
	constructor () {
	}
	
	/**
	 * This is for consistency with other classes that implement calling magic,
	 * as this method is not used for calling the .
	 * @param mixed _ [optional]
	 * @return mixed
	 * @link https://secure.php.net/manual/en/class.closure.php
	 */
	;
	
	/**
	 * @param _
	 * @param _
	 */
	__invoke (..._) {
	}
	
	/**
	 * Duplicates the closure with a new bound object and export class scope
	 * @link https://secure.php.net/manual/en/closure.bindto.php
	 * @param object newthis The object to which the given anonymous  should be bound, or NULL for the closure
	 *     to be unbound.
	 * @param mixed newscope The export class scope to which associate the closure is to be associated, or 'static' to
	 *     keep the current one. If an object is given, the type of the object will be used instead. This determines
	 *     the visibility of protected and private methods of the bound object.
	 * @return Closure Returns the newly created Closure object or FALSE on failure
	 */
	;
	
	bindTo (newthis, newscope = 'static') {
	}
	
	/**
	 * This method is a static version of Closure::bindTo().
	 * See the documentation of that method for more information.
	 * @static
	 * @link https://secure.php.net/manual/en/closure.bind.php
	 *     to be unbound.
	 *     the current one. If an object is given, the type of the object will be used instead. This determines the
	 *     visibility of protected and private methods of the bound object.
	 * @param newscope
	 * @param closure
	 * @param newthis
	 * @param newscope
	 */
	bind (closure: Closure, newthis, newscope = 'static') {
	}
	
	/**
	 * Temporarily binds the closure to newthis, and calls it with any given parameters.
	 * @link https://php.net/manual/en/closure.call.php
	 * @param newthis
	 * @param parameters
	 * @param newthis
	 * @param parameters
	 */
	call (newthis, ...parameters) {
	}
	
	/**
	 * @param callable callable
	 * @return Closure
	 * @since 7.1
	 */
	fromCallable (callable: Function) {
	}
}

/**
 * Classes implementing <b>Countable</b> can be used with the
 * <b>count</b> .
 * @link https://php.net/manual/en/class.countable.php
 */
export interface Countable {
	
	/**
	 * Count elements of an object
	 * @link https://php.net/manual/en/countable.count.php
	 * @return int The custom count as an integer.
	 * </p>
	 * <p>
	 * The return value is cast to an integer.
	 */
	
	
	
	count ();
}

/**
 * Weak references allow the programmer to retain a reference to an
 * object which does not prevent the object from being destroyed.
 * They are useful for implementing cache like structures.
 * @link https://www.php.net/manual/en/class.weakreference.php
 */
export class WeakReference {
	/**
	 * This method exists only to disallow instantiation of the WeakReference
	 * class. Weak references are to be instantiated with the factory method
	 * <b>WeakReference::create()</b>.
	 */
	
	constructor () {
	}
	
	/**
	 * Create a new weak reference.
	 * @link https://www.php.net/manual/en/weakreference.create.php
	 * @return WeakReference the freshly instantiated object.
	 * @since 7.4.0
	 * @param referent
	 */
	
	create (referent: any): WeakReference {
		return new WeakReference();
	}
	
	/**
	 * Gets a weakly referenced object. If the object has already been
	 * destroyed, NULL is returned.
	 * @link https://www.php.net/manual/en/weakreference.get.php
	 * @return object|null
	 * @since 7.4.0
	 */
	get () {
		return {};
	}
}
/**
 * ParseError is thrown when an error occurs while parsing PHP code, such as when {@see eval()} is called.
 * @link https://php.net/manual/en/class.parseerror.php
 * @since 7.0
 */
export class ParseError extends CompileError {

}
