function initials(name) {
    const parts = name.split(" ");
    let result = "";

    for (const part of parts) {
        result += `${part[0]}.`;
    }
    return result;
}

console.log(initials("Chuck Norris"));
console.log(initials("Pamela Anderson"));
console.log(initials("Zan Klod Van Dam"));