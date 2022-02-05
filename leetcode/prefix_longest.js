const strs = ["cir", "car"];
const s = [];
let res = [];
let res1 = [];
if (strs.length > 1) {
    for (i = 0; i < strs.length; i++) {
        s[i] = strs[i].length;
    }

    let temp = 0;
    for (i = 0; i < s.length - 1; i++) {
        if (s[i] < s[i + 1]) {
            temp = s[i];
            s[i] = s[i + 1];
            s[i + 1] = temp;
        }
    }

    let t = s[s.length - 1]

    for (i = 0; i < t; i++) {
        if (strs[0].charAt(i) === strs[1].charAt(i)) {

            res[i] = strs[0].charAt(i);
        }
    }

    for (j = 0; j < strs.length; j++) {
        for (i = 0; i < res.length; i++) {
            if (res[i] == strs[j].charAt(i)) {
                res1[i] = res[i];
            } else {
                break;
            }
        }
        if (res1.length <= res.length) {
            res = res1;
            console.log(res);

            res1 = [];
        }
    }
    if (res.length >= 1) {
        console.log(res.join(''));
    } else {
        console.log("")
    }
} else {
    console.log(strs);
}