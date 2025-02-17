import firebase_admin
from firebase_admin import credentials, firestore

from models import *

cred = credentials.Certificate('./backend/ServiceAccountKey.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client(app)

def add_prodotto(prodotto:Item):
    db.collection("prodotti").document(
        prodotto.name
    ).set(
        prodotto.model_dump()
    )

def get_prodotti():
    prodotti = []
    for prodotto in db.collection("prodotti").stream():
        prodotti += [ prodotto.to_dict() ]
        # prodotti.append( prodotto.to_dict() )
    return prodotti
