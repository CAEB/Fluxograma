const data = {
    "Cálculo I": { //mexido
        "periodo": 1,
        "requisito": []
    },
    "Geometria Analítica": {
        "periodo": 1,
        "requisito": []       
    },
    "Leitura e Interpretação de Desenho Técnico": {
        "periodo": 1,
        "requisito": []
    },
    "Fundamentos de Química para Engenharia I-B": {
        "periodo": 1,
        "requisito": []
    },
    "Biologia Celular": { //mexido
        "periodo": 1,
        "requisito": []
    },
    "Introdução à Engenharia Bioquímica": { //ok
        "periodo": 1,
        "requisito": []
    },
    "Comunicação Científica em Biotecnologia": { //ok
        "periodo": 1,
        "requisito": []
    },
    "Cálculo II": { //ok
        "periodo": 2,
        "requisito": [
            "Cálculo I",
            "Geometria Analítica"
        ]
    },
    "Álgebra Linear": {
        "periodo": 2,
        "requisito": [
            "Geometria Analítica"
        ]
    },
    "Física I": {
        "periodo": 2,
        "requisito": []
    },
    "Física Experimental I": {
        "periodo": 2,
        "requisito": []
    },
    "Fundamentos de Química para Engenharia II-A": {
        "periodo": 2,
        "requisito": [
            "Fundamentos de Química para Engenharia I-B"
        ]
    },
    "Química Geral Experimental": {
        "periodo": 2,
        "requisito": [
            "Fundamentos de Química para Engenharia I-B"
        ]
    },
    "Microbiologia": {
        "periodo": 2,
        "requisito": [
            "Biologia Celular"
        ]
    },
    "Microbiologia Experimental": {
        "periodo": 2,
        "requisito": [
            "Microbiologia"
        ]
    },
    "Engenharia Genética": {
        "periodo": 2,
        "requisito": [
            "Biologia Celular"
        ]
    },
    "Cálculo III": {
        "periodo": 3,
        "requisito": [
            "Cálculo II"
        ]
    },
    "Física II": {
        "periodo": 3,
        "requisito": [
            "Cálculo I",
            "Física I"
        ]
    },
    "Mecânica": {
        "periodo": 3,
        "requisito": [
            "Física I",
            "Cálculo II"
        ]
    },
    "Introdução aos Métodos Numéricos e Computacionais": {
        "periodo": 3,
        "requisito": [
            "Geometria Analítica",
            "Cálculo II"
        ]
    },
    "Balanços de Massa e Energia": {
        "periodo": 3,
        "requisito": []
    },
    "Química Bioinorgânica": {
        "periodo": 3,
        "requisito": [
            "Fundamentos de Química para Engenharia II-A"
        ]
    },
    "Química Orgânica Fundamental": {
        "periodo": 3,
        "requisito": [
            "Fundamentos de Química para Engenharia II-A"
        ]
    },
    "Cálculo IV": {
        "periodo": 4,
        "requisito": [
            "Álgebra Linear",
            "Cálculo II"
        ]
    },
    "Física III": {
        "periodo": 4,
        "requisito": [
            "Física II",
            "Cálculo II"
        ]
    },
    "Física Experimental III": {
        "periodo": 4,
        "requisito": [
            "Física Experimental I"
        ]
    },
    "Termodinâmica Química Aplicada I": {
        "periodo": 4,
        "requisito": [
            "Balanços de Massa e Energia",
            "Cálculo II",
            "Física II"
        ]
    },
    "Fenômenos de Transporte I": {
        "periodo": 4,
        "requisito": [
            "Mecânica",
            "Cálculo III"
        ]
    },
    "Estrutura e Química de Materiais Lignocelulósicos": {
        "periodo": 4,
        "requisito": [
            "Química Orgânica Fundamental"
        ]
    },
    "Bioquímica I": {
        "periodo": 4,
        "requisito": [
            "Química Orgânica Fundamental",
            "Biologia Celular"
        ]
    },
    "Bioquímica Experimental I": {
        "periodo": 4,
        "requisito": [
            "Bioquímica I"
        ]
    },
    "Estatística": {
        "periodo": 5,
        "requisito": [
            "Cálculo II"
        ]
    },
    "Eletricidade Aplicada": {
        "periodo": 5,
        "requisito": [
            "Física III"
        ]
    },
    "Laboratório de Eletricidade": {
        "periodo": 5,
        "requisito": [
            "Física Experimental III"
        ]
    },
    "Introdução à Ciência dos Materiais": {
        "periodo": 5,
        "requisito": []
    },
    "Operações Unitárias I": {
        "periodo": 5,
        "requisito": [
            "Fenômenos de Transporte I"
        ]
    },
    "Fenômenos de Transporte II": {
        "periodo": 5,
        "requisito": [
            "Fenômenos de Transporte I",
            "Cálculo IV",
            "Física II"
        ]
    },
    "Termodinâmica Química Aplicada II": {
        "periodo": 5,
        "requisito": [
            "Termodinâmica Química Aplicada I"
        ]
    },
    "Bioquímica II": {
        "periodo": 5,
        "requisito": [
            "Bioquímica I"
        ]
    },
    "Bioquímica Experimental II": {
        "periodo": 5,
        "requisito": [
            "Bioquímica II"
        ]
    },
    "Tecnologia de Conversão de Biomassa Vegetal": { //mexido
        "periodo": 5,
        "requisito": [
            "Estrutura e Química de Materiais Lignocelulósicos"
        ]
    },
    "Fenômenos de Transporte III": {
        "periodo": 6,
        "requisito": [
            "Fenômenos de Transporte II"
        ]
    },
    "Operações Unitárias II": { //mexido
        "periodo": 6,
        "requisito": [
            "Fenômenos de Transporte II"
        ]
    },
    "Tecnologia de Processos Fermentativos": {
        "periodo": 6,
        "requisito": [
            "Bioquímica II",
            "Microbiologia"
        ]
    },
    "Fundamentos de Engenharia Econômica": {
        "periodo": 6,
        "requisito": [
            "Estatística"
        ]
    },
    "Engenharia de Segurança do Trabalho e Biossegurança": { //mexido
        "periodo": 6,
        "requisito": [
            "Engenharia Genética"
        ]
    },
    "Tecnologia de Biopolímeros": {
        "periodo": 6,
        "requisito": [
            "Química Orgânica Fundamental"
        ]
    },
    "Química Analítica Aplicada a Bioprocessos": {
        "periodo": 6,
        "requisito": [
            "Química Geral Experimental",
            "Fundamentos de Química para Engenharia II-A",
            "Bioquímica Experimental I"
        ]
    },
    "Operações Unitárias III": { //mexido
        "periodo": 7,
        "requisito": [
            "Fenômenos de Transporte III"
        ]
    },
    "Engenharia Bioquímica I": {
        "periodo": 7,
        "requisito": [
            "Tecnologia de Processos Fermentativos"
        ]
    },
    "Enzimologia": {
        "periodo": 7,
        "requisito": [
            "Engenharia Genética",
            "Bioquímica I",
            "Microbiologia"
        ]
    },
    "Genética e Biotecnologia Vegetal": {
        "periodo": 7,
        "requisito": [
            "Bioquímica II",
            "Microbiologia",
            "Engenharia Genética"
        ]
    },
    "Tratamento Biológico de Efluentes": {
        "periodo": 7,
        "requisito": [
            "Microbiologia"
        ]
    },
    "Processos Bioquímicos Industriais": { //mexido
        "periodo": 7,
        "requisito": [
            "Operações Unitárias II",
            "Tecnologia de Processos Fermentativos"
        ]
    },
    "Empreendedorismo Tecnológico": {
        "periodo": 7,
        "requisito": []
    },
    "Introdução ao Gerenciamento de Projetos Ambientais": {
        "periodo": 7,
        "requisito": []
    },
    "Laboratório de Engenharia Química III": {
        "periodo": 8,
        "requisito": [
            "Operações Unitárias I",
            "Operações Unitárias II"
        ]
    },
    "Engenharia Bioquímica II": {
        "periodo": 8,
        "requisito": [
            "Engenharia Bioquímica I"
        ]
    },
    "Modelagem e Simulação de Processos Biotecnológicos": {
        "periodo": 8,
        "requisito": [
            "Introdução aos Métodos Numéricos e Computacionais",
            "Operações Unitárias II"
        ]
    },
    "Estatística em Bioprocessos": {
        "periodo": 8,
        "requisito": [
            "Estatística",
            "Processos Bioquímicos Industriais",
        ]
    },
    "Reatores Bioquímicos": {
        "periodo": 8,
        "requisito": [
            "Engenharia Bioquímica I",
        ]
    },
    "Laboratório de Engenharia Bioquímica": {
        "periodo": 8,
        "requisito": [
            "Engenharia Bioquímica I",
            "Enzimologia"
        ]
    },
    "Instrumentação e Controle de Bioprocessos": {
        "periodo": 8,
        "requisito": [
            "Fenômenos de Transporte II",
            "Eletricidade Aplicada",
            "Tecnologia de Processos Fermentativos"
        ]
    },
    "Solução de Problemas de Engenharia": {
        "periodo": 8,
        "requisito": [
            "Engenharia Genética",
            "Enzimologia",
            "Tecnologia de Conversão de Biomassa Vegetal"
        ]
    },
    "Projeto Final de Curso": {
        "periodo": 9,
        "requisito": [
            "Solução de Problemas de Engenharia"
        ]
    },
}
