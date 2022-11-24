import signet_logger
import pymongo
import os
from dotenv import load_dotenv
import pymongo
from signet_core.db import mongo;
from signet_core.db.mongo.connector import init_scorer_db
from signet_core.db.mongo.connector import get_scorer
from signet_core.db.mongo.connector import get_custom_db_connection
from signet_core.db.mongo.utils import document_exists
from signet_core.db.mongo.utils import get_many
from signet_core.db.mongo.utils import get_one_by_match
from signet_core.db.mongo.utils import get_one
from signet_core.db.mongo.utils import str_to_object_id
from signet_core.db.mongo.utils import get_distinct
from signet_core import constants as core_constants
myList = 1.5656656
print (type(myList)==float)
