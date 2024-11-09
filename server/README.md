# Server README

## About

Built with Express and PG. Used as the backend to retrieve Latin word information.

## PSQL

```

CREATE TABLE pos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO pos (name)
VALUES ('Nōmen');

CREATE TABLE words (
    id SERIAL PRIMARY KEY,
    lemma VARCHAR(255) NOT NULL,
    head VARCHAR(500) NOT NULL,
    pos_id INTEGER NOT NULL,
    def TEXT NOT NULL,
    img VARCHAR(900)
);

INSERT INTO words (lemma, head, pos_id, def, img)
VALUES ('rosaceus', 'rosāceus a um', 3, 'ῥόδινος, quī est ēx rosā factus. e.g. corōna, cērātum, oleum, collȳrium', NULL);

```

1 | Nōmen
2 | Prōnōmen
3 | Adjectīvum
4 | Verbum
5 | Adverbum
6 | Conjūnctiō
7 | Praepositiō
8 | Interjectiō
