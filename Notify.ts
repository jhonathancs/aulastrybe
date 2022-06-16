abstract class Notify {
    protected _to: string;
    protected _from: string;
    protected _subject: string;
    protected _message: string;

    constructor(to: string, from: string, subject: string, message: string) { 
        this._to = to;
        this._from = from;
        this._subject = subject;
        this._message = message;
    }
    
    public abstract send(): void;

}

class Whatsapp extends Notify {

    private _urlVideo: string;

    constructor(to: string, from:string, subject: string, message: string, urlVideo: string) {
        super(to, from, subject, message);
        this._urlVideo = urlVideo;
    }

    public send(): void {
        console.log(`Whatsapp MESSAGE
                    SUBJECT: ${this._subject}
                    TO: ${this._to}
                    FROM: ${this._from}
                    MESSAGE: ${this._message}
                    VIDEO: ${this._urlVideo}`);
    }
    
}

class Email extends Notify{

    private _html: string;

    constructor(to: string, from:string, subject: string, message: string, html: string) {
        super(to, from, subject, message);
        this._html = html;
    }

    public send(): void {
        console.log(`E-mail MESSAGE
                    SUBJECT: ${this._subject}
                    TO: ${this._to}
                    FROM: ${this._from}
                    MESSAGE: ${this._message}
                    HTML: ${this._html}`);
    }
}

const notifyWhatsapp = new Whatsapp('Rafa', 'Willian', 'Aula', 'eai rafa, bora pra aula?', 'www.youtube.com');
//notifyWhatsapp.send();

const notifyEmail = new Email('nato', 'willian', 'mentoria', 'bora pra mentoria hoje?', '<h1>EAI? BORA</h1>')
//notifyEmail.send();

function main(notify: Notify) {
    notify.send();
}

main(notifyEmail);