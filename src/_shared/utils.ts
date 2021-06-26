export const expr = (expr: any | string) => {

    let chars = expr.split("");
    let n = [];
    let op = [];
    let index = 0;
    let oplast = true;

    n[index] = "";

    for (let c = 0; c < chars.length; c++) {
        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }
    // @ts-ignore
    expr = parseFloat(n[0]);
    for (let o = 0; o < op.length; o++) {
        let num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }
    return expr;
};

