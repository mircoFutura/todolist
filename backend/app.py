from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from models import *
from database import *


app = FastAPI()


@app.post("/prodotto")
def prodotto(prodotto:Item):
    add_prodotto(prodotto)
    return True


@app.get("/prodotti")
def prodotti():
    return get_prodotti()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # origins,  # or ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # or specify specific methods ["GET", "POST"]
    allow_headers=["*"],  # or specify specific headers
)

uvicorn.run(app, host="0.0.0.0", port=8000)