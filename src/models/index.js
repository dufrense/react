import request from '../utils/request.js';

let index = {
    namespace: 'index',
    state: {
        wordList: ["debug", "ABORT", "ACOS", "ACOSH", "ALIASES", "ARGV0", "ASIN", "ASINH", "ASSOC", "AT", "ATAN", "ATAN2", "ATANH", "ATIME", "BASENAME", "BINREAD", "BINWRITE", "BIRTHTIME", "CBRT", "CHDIR", "CHMOD", "CHOWN", "CHROOT", "CLEAR", "COMPILE", "CONSTANTS", "COS", "COSH", "COUNT", "CTIME", "CURRENT", "DAEMON", "DELETE", "DETACH", "DIRNAME", "DISABLE", "DISASM", "DISASSEMBLE", "DUMP", "EACH", "EGID", "EID", "ENABLE", "ENTRIES", "ERF", "ERFC", "ESCAPE", "EUID", "EXCEPTION", "EXCLUSIVE", "EXEC", "EXIT", "EXP", "EXTNAME", "FETCH", "FIND", "FNMATCH", "FOREACH", "FORK", "FREXP", "FTYPE", "GAMMA", "GETEGID", "GETEUID", "GETGID", "GETPGID", "GETPGRP", "GETPRIORITY", "GETRLIMIT", "GETSID", "GETUID", "GETWD", "GID", "GLOB", "GM", "GROUPS", "HOME", "HYPOT", "INDEX", "INITGROUPS", "INSPECT", "INVERT", "ISSETUGID", "JOIN", "KEY", "KEYS", "KILL", "LCHMOD", "LCHOWN", "LDEXP", "LENGTH", "LGAMMA", "LINK", "LIST", "LOAD", "LOCAL", "LOG", "LOG10", "LOG2", "LSTAT", "MAIN", "MAXGROUPS", "MKDIR", "MKFIFO", "MKTIME", "MTIME", "NESTING", "NEW", "NOW", "OF", "OPEN", "PASS", "PATH", "PID", "PIPE", "POLAR", "POPEN", "PPID", "PWD", "QUOTE", "RAND", "RASSOC", "READ", "READLINES", "READLINK", "REALDIRPATH", "REALPATH", "RECT", "RECTANGULAR", "REHASH", "REJECT", "RENAME", "REPLACE", "REPORT", "RESTORE", "RESULT", "RID", "RMDIR", "SELECT", "SETEGID", "SETEUID", "SETGID", "SETPGID", "SETPGRP", "SETPRIORITY", "SETPROCTITLE", "SETREGID", "SETRESGID", "SETRESUID", "SETREUID", "SETRGID", "SETRLIMIT", "SETRUID", "SETSID", "SETUID", "SHIFT", "SIGNAME", "SIN", "SINH", "SIZE", "SPAWN", "SPLIT", "SQRT", "SRAND", "START", "STAT", "STOP", "STORE", "STRESS", "SWITCH", "SYMLINK", "SYSOPEN", "TAN", "TANH", "TIMES", "TRACE", "TRAP", "TRUNCATE", "UID", "UMASK", "UNION", "UNLINK", "UPDATE", "UTC", "UTIME", "VALUES", "WAIT", "WAIT2", "WAITALL", "WAITPID", "WAITPID2", "WRITE", "YIELD", "ARRAY", "COMPLEX", "FLOAT", "HASH", "INTEGER", "RATIONAL", "STRING", "ABS", "ABS2", "ADD", "ADVISE", "ALLOCATE", "ANCESTORS", "ANGLE", "ARG", "ARGS", "ARITY", "ASCTIME", "ATTR", "AUTOLOAD", "B", "BACKTRACE", "BEGIN", "BIND", "BINDING", "BINMODE", "BLKSIZE", "BLOCKS", "BROADCAST", "BSEARCH", "BYTES", "BYTESIZE", "BYTESLICE", "CALL", "CALLCC", "CALLER", "CAPITALIZE", "CAPTURES", "CASECMP", "CATCH", "CAUSE", "CEIL", "CENTER", "CHARS", "CHOMP", "CHOP", "CHR", "CHUNK", "CLASS", "CLONE", "CLOSE", "CODEPOINTS", "COERCE", "COLLECT", "COMBINATION", "COMPACT", "CONCAT", "CONJ", "CONJUGATE", "CONVERT", "CONVPATH", "CRYPT", "CURRY", "CYCLE", "DAY", "DEFAULT", "DENOMINATOR", "DEQ", "DETECT", "DEV", "DIG", "DISPLAY", "DIV", "DIVMOD", "DOWNCASE", "DOWNTO", "DROP", "DUP", "ENCLOSE", "ENCODE", "ENCODING", "END", "ENQ", "EOF", "ERRNO", "EVAL", "EVENT", "EXITSTATUS", "EXTEND", "EXTENDED", "FAIL", "FCNTL", "FDATASYNC", "FDIV", "FEED", "FILENO", "FILL", "FINALIZE", "FINISH", "FIRST", "FLATTEN", "FLOCK", "FLOOR", "FLUSH", "FORMAT", "FREEZE", "FSYNC", "GCD", "GCDLCM", "GETBYTE", "GETC", "GETGM", "GETLOCAL", "GETS", "GETUTC", "GMTIME", "GMTOFF", "GREP", "GROUP", "GSUB", "HASH", "HEX", "HOUR", "I", "ID2NAME", "IMAG", "IMAGINARY", "INCLUDE", "INCLUDED", "INHERITED", "INJECT", "INO", "INSERT", "INTERN", "IOCTL", "ISATTY", "ISDST", "ITSELF", "LABEL", "LAMBDA", "LAST", "LAZY", "LCM", "LINENO", "LINES", "LJUST", "LOCALTIME", "LOCK", "LOOP", "LSTRIP", "MAGNITUDE", "MAP", "MATCH", "MAX", "MDAY", "MEMBERS", "MERGE", "MESSAGE", "METHOD", "METHODS", "MIN", "MINMAX", "MODE", "MODULO", "MON", "MONTH", "NAME", "NAMES", "NEXT", "NLINK", "NSEC", "NUMERATOR", "OCT", "OFFSET", "OPTIONS", "ORD", "OWNER", "P", "PACK", "PARAMETERS", "PARTITION", "PEEK", "PERMUTATION", "PHASE", "POP", "POS", "PRED", "PREPEND", "PREPENDED", "PRINT", "PRINTF", "PRIORITY", "PRIVATE", "PROC", "PRODUCT", "PROTECTED", "PUBLIC", "PUSH", "PUTBACK", "PUTC", "PUTS", "QUO", "RAISE", "RATIONALIZE", "RDEV", "READBYTE", "READCHAR", "READLINE", "READPARTIAL", "REAL", "REASON", "RECEIVER", "REDUCE", "REFINE", "REGEXP", "REMAINDER", "REOPEN", "REPLACEMENT", "REPLICATE", "REQUIRE", "RESUME", "REVERSE", "REWIND", "RINDEX", "RJUST", "ROTATE", "ROUND", "RPARTITION", "RSTRIP", "RUN", "SAMPLE", "SCAN", "SCRUB", "SEC", "SEED", "SEEK", "SELF", "SEND", "SETBYTE", "SHUFFLE", "SIGNAL", "SIGNO", "SLEEP", "SLICE", "SORT", "SOURCE", "SPRINTF", "SQUEEZE", "STATUS", "STEP", "STOPSIG", "STRFTIME", "STRING", "STRIP", "SUB", "SUBSEC", "SUCC", "SUM", "SUPERCLASS", "SWAPCASE", "SYNC", "SYNCHRONIZE", "SYSCALL", "SYSREAD", "SYSSEEK", "SYSTEM", "SYSWRITE", "TAG", "TAINT", "TAKE", "TAP", "TELL", "TERMINATE", "TERMSIG", "TEST", "THROW", "TR", "TRANSFER", "TRANSPOSE", "TRUST", "UNBIND", "UNGETBYTE", "UNGETC", "UNIQ", "UNLOCK", "UNPACK", "UNSHIFT", "UNTAINT", "UNTRUST", "UPCASE", "UPTO", "USEC", "USING", "VALUE", "WAKEUP", "WARN", "WDAY", "YDAY", "YEAR", "ZIP", "ZONE"],
        thingList: []
    },
    effects: {
        // 异步action
        *changeName({ }, { select, put, call }) {
            console.log("进入到 saga里面的 changeName了");
            let res = yield call(request('nameBack.json'));
            console.log("saga 获取到的数据为：", res);
            yield put({ type: 'changeNameReducer', payload: { wholeName: res.data } });
        },
        *upload({ payload }, { select, put, call }) {
            console.log("进入到 saga里面的 upload");
            let res = yield call(request('http://129.28.85.228:8081/thing/upload'));
            console.log("saga 获取到的数据为：", res);
            yield put({ type: 'changeNameReducer', payload: { wholeName: res.data } });
        },
        *saveThing({ payload }, { select, put, call }) {
            console.log("saveThing222222");
            console.log("进入到 saga里面的 saveThing", payload);
            let res = yield call(request('http://129.28.85.228:8081/thing/save', {
                method: 'post',
                data: { ...payload }
            }));
            console.log("saga 保存物品后得到的数据为：", res);
        },
        *listThing({ payload }, { select, put, call }) {
            let res = yield call(request('http://129.28.85.228:8081/thing/listThing'));
            console.log("saga 获取到的数据为：", res);
            yield put({ type: 'setRemoteState', payload: { thingList: res.data } });
        }
    },
    reducers: {
        changeNameReducer(state, { payload }) {
            return {  // 返回一个新值,值不可变性
                wholeName: payload.wholeName
            }
        },
        setRemoteState(state, {payload}){

            console.log("es6", {...state, ...payload});
            console.log("es6", Object.assign(state, payload));

            return {...state, ...payload};
        }
    }
}

export default index;