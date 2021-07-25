from .settings import *
import dj_database_url

DEBUG = False
TEMPLATE_DEBUG = False
ALLOWED_HOSTS = ["caffedeparis.herokuapp.com"]
SECRET_KEY = "m-4^ea^@l57t(vc^ns%h!nw-&(fxtac6a44z#l%=y_zifb7(+%"


DATABASES["default"] = dj_database_url.config()

MIDDLEWARE += ['whitenoise.middleware.WhiteNoiseMiddleware']
STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'