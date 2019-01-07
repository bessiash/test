// lodash is very powerful utility library. so I use it to save my time and provide nice performance
import _ from 'lodash'

// original function works only with 3 args, but this implementation works with any number of args.
// so if someone like to use the same logic for more numbers of args it would work.
function func(s, ...args) {
    // I check that 's' doesn't empty (not empty string/object/array, not undefined, not null) to avoid extra iterations
	if (_.isEmpty(s)) {
		return -1;
    }

    let res = -1;
    // I iterate over all args except first in the reverse order.
    for (let i = args.length - 1; i >= 0 && res === -1; i--) {
        // I try to find last index of arg with number i in 's'.
        // if last index is more than -1 I stope iteration to return result without extra iterations
        res = _.lastIndexOf(s, args[i]);
    }

	return res;
}
