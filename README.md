# password-complexity.js
A simple library for testing how common a password is based on the Top 100 password toplogies according to [PathWell's research](https://blog.korelogic.com/blog/2014/04/04/pathwell_topologies).

In the event of a breach where hashed passwords are compromised, if ``PasswordComplexity.isCommon()`` returns ``true``, the password can be cracked within several seconds.

## Usage
```javascript
  PasswordComplexity.isCommon('Boulder14'); // true
  PasswordComplexity.isCommon('Boulder14'); // 1 (this is the most common topology)
```

## Performance
On a modern MacBook Pro, this can check against the top 500 passwords at **1.4 million passwords per second**. Regular expressions were evaluated and were much slower. The ``topologies`` array is ordered by most common to least common topology, so ``indexOf`` is faster than an property lookup on an object in most JavaScript engines.

If you're interested in seeing some alternative implementations, check out this jsPerf:
http://jsperf.com/pathwell/2

## TODO
1. Provide end user helpful hints to pick a stronger password
2. Do not allow the current year as a suffix
3. Do not allow the domain or name of site as the prefix

## Protect your data, Protect your users
Use [bcrypt](https://github.com/search?utf8=%E2%9C%93&q=bcrypt) or [scrypt](https://github.com/search?utf8=%E2%9C%93&q=scrypt&type=Repositories&ref=searchresults) to hash your passwords.

**Developers, IT professionals, system administrators and techies should watch this:**
[Your Password Complexity Requirements are Worthless - OWASP AppSecUSA 2014](https://www.youtube.com/watch?v=zUM7i8fsf0g)


**Developers, check out OWASP's cheat sheets for best security practices in a "cookbook/todo" format:**
https://www.owasp.org/index.php/Cheat_Sheets
