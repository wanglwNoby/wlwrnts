interface ILogin {
    account: string;
    password: string;
}

interface ICheck {
    params: {
        token: string;
    };
}

interface IChangePassword {
    type: string;
    oldpassword: string;
    newpassword: string;
}

interface IChangeLang {
    lang_id: string;
}

interface IChangeTheme {
    theme_name: string;
}
