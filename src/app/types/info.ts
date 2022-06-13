export class Info{
    noms: string;
    prenoms: string;
    dateNaissance?: string
    lieuNaissance?: string
    adresse?: string
    contacts: Contact[]
    occupation?: string
    photo?: string
    description?: string
    emails: Email[]
}

class Contact{
    id: number
    contact: string
}

class Email{
    id: number
    email: string
}