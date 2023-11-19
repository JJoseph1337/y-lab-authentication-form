export const signInRequest = (email, password) => new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
        clearTimeout(timeout);

        if (email !== "admin@gmail.com" || password !== "admin") {
            reject(new Error("Неправильный логин или пароль"))
        }

        resolve("Аутентификация прошла успешно")
    }, 2000)
});

