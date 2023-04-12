from genericpath import isdir
import os
from PIL import Image
from pathlib import Path
from shutil import copyfile


"""
Step 1.
We need to ensure that the "full", "thumbnails", and "church" folders exists
"""

if not os.path.exists("full"):
    print("The 'full' directory does not exists, please try again.")
    quit()

if not os.path.exists("thumbnails"):
    Path("thumbnails").mkdir(parents=True, exist_ok=True)

if not os.path.exists("thumbnails/church"):
    Path("thumbnails/church").mkdir(parents=True, exist_ok=True)

if not os.path.exists("full/church"):
    print("The 'full/church' directory does not exists, please try again.")
    quit()

"""
Step 2.
We need to convert any png files to jpg files
"""

print()
print('==> Converting "full" images to jpg...')

fullImages = os.listdir("full")

for imagePath in fullImages:

    filename, extension = os.path.splitext(imagePath)

    imagePath = os.getcwd() + "/full/" + imagePath

    if extension in [".png"]:

        newFile = os.getcwd() + "/full/" + filename + ".jpg"

        try:
            with Image.open(imagePath) as imageFile:
                tmpImage = imageFile.convert("RGB")
                tmpImage.save(newFile)
            os.remove(imagePath)
        except IOError:
            raise IOError
            print("cannot convert", imagePath)

print('==> Converting "full/church" images to jpg...')

churchImages = os.listdir("full/church")

for imagePath in churchImages:

    filename, extension = os.path.splitext(imagePath)

    imagePath = os.getcwd() + "/full/church/" + imagePath

    if extension in [".png"]:

        newFile = os.getcwd() + "/full/church/" + filename + ".jpg"

        try:
            with Image.open(imagePath) as imageFile:
                tmpImage = imageFile.convert("RGB")
                tmpImage.save(newFile)
            os.remove(imagePath)
        except IOError:
            raise IOError
            print("cannot convert", imagePath)

"""
Step 3.
We need to delete any existing thumbnails
"""

print("==> Deleting old thumbnails...")

thumbnails = os.listdir("thumbnails")

for imagePath in thumbnails:

    path = os.getcwd() + "/thumbnails/" + imagePath

    if(not isdir(path)):
        os.remove(path)


"""
Step 4.
We need to copy all full sized images from the "full" folder
to the "thumbnails" folder
"""

print("==> Copying 'full' images to thumbnails...")

for imagePath in fullImages:

    srcPath = os.getcwd() + "/full/" + imagePath

    destPath = os.getcwd() + "/thumbnails/" + imagePath

    if(not isdir(srcPath)): 
        copyfile(srcPath, destPath)


print("==> Copying 'full/church' images to thumbnails...")

for imagePath in churchImages:

    srcPath = os.getcwd() + "/full/church/" + imagePath

    destPath = os.getcwd() + "/thumbnails/church/" + imagePath

    if(not isdir(srcPath)): 
        copyfile(srcPath, destPath)

"""
Step 5.
We need to transform every picture in the 
thumbnails folder to a smaller "thumbnail"
version
"""

print("==> Converting 'full' images to thumbnails...")

thumbnailSize = (400, 400)

thumbnails = os.listdir("thumbnails")

for imagePath in thumbnails:

    imagePath = os.getcwd() + "/thumbnails/" + imagePath

    if(isdir(imagePath)):
        continue

    destFile = os.path.splitext(imagePath)[0] + ".jpg"

    try:
        with Image.open(imagePath) as imageFile:
            imageFile.thumbnail(thumbnailSize)
            imageFile.save(destFile, "JPEG")
    except IOError:
        raise(IOError)
        print("cannot create thumbnail for", imagePath)

print("==> Converting 'full/church' images to thumbnails...")

thumbnailSize = (400, 400)

thumbnails = os.listdir("thumbnails/church")

for imagePath in thumbnails:

    imagePath = os.getcwd() + "/thumbnails/church/" + imagePath

    if(isdir(imagePath)):
        continue

    destFile = os.path.splitext(imagePath)[0] + ".jpg"

    try:
        with Image.open(imagePath) as imageFile:
            imageFile.thumbnail(thumbnailSize)
            imageFile.save(destFile, "JPEG")
    except IOError:
        raise(IOError)
        print("cannot create thumbnail for", imagePath)


print('==> Done :)')
