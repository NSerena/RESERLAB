export interface Equipo {
    nombre:      string;
    id:          string;
    desc:        string;
    tipo:        Tipo;
    localizador: string;
    grupo?:      Grupo;
}

export enum Grupo {
    Inma = "INMA",
    Nfp = "NFP",
}

export enum Tipo {
    Caracterización = "caracterización",
    Síntesis = "síntesis",
    Térmicos = "térmicos",
}