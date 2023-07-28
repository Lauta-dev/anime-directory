## Como usarlo de manera local

## ⚠️ warning
>La distribuscion de Linux que estoy usando es [Manjaro](https://manjaro.org/). Asi que varia de otrar distros de Linux, Windows o MacOS

### Requerimientos
+ [nodejs](https://nodejs.org/en) LTS (18.17)
+ [pnpm](https://pnpm.io/es/) o npm (este ultimo viene instalado con [nodejs](https://nodejs.org/en)

**Clonar el repositorio**
```bash
git clone https://github.com/Lauta-dev/anime-directory.git
cd anime-directory
```

**Instalar dependencias del proyecto**
```bash
pnpm install
```

o si prefiere [pnpm](https://pnpm.io/es/)

```bash
pnpm install
```

**Ir a la carpeta server donde se ejecuta el backend e instalar dependencias si no se instalaron**
```bash
cd anime-directory/server
pnpm install
```

**Instalar SQLite**
```bash
sudo pacman -S sqlite
```

**Por defecto, el proyecto ya viene con una base de datos de muestra `audit.db`**
```bash
sqlite3 -markdown ./audit.db "SELECT * FROM anime;"
```

**Esto genera una tabla de markdown con los datos de la tabla**

| id |                     anime_name                     | mal_id | type  |
|----|----------------------------------------------------|--------|-------|
| 2  | Dragon Ball Super: Broly                           | 36946  | Movie |
| 3  | Hellsing Ultimate                                  | 777    | OVA   |
| 4  | Kobayashi-san Chi no Maid Dragon                   | 33206  | TV    |
| 5  | Dragon Ball Kai                                    | 6033   | TV    |
| 6  | Berserk                                            | 2      | Manga |
| 7  | Hunter x Hunter                                    | 26     | Manga |
| 8  | Ikkitousen: Dragon Destiny                         | 1956   | TV    |
| 9  | "Oshi no Ko"                                       | 52034  | TV    |
| 10 | Dragon Ball Super                                  | 30694  | TV    |
| 11 | Zom 100: Zombie ni Naru made ni Shitai 100 no Koto | 54112  | TV    |

**Si quiere mirar los datos de manera grafica, puede usar [sqlitebrowser](https://sqlitebrowser.org/)**
(Confio que tengas la capacidad de instalar el programa y abrir la base de datos)

**Iniciar el servidor**
```bash
node saveData.js

# Salida 
# http://localhost:8080
```


**Volve a la raiz del proyecto e inicialo**
```bash
pnpm run dev

# VITE v4.3.9  ready in 2607 ms

# ➜  Local:   http://localhost:5173/
# ➜  Network: use --host to expose
# ➜  press h to show help
```

Y listo, solo entre a la dirección de web que se le dio.
