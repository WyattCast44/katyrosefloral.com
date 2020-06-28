import os
from PIL import Image
from pathlib import Path
from shutil import copyfile


"""
Step 1.
We need to ensure that the "full" and "thumbnails" folders exists
"""

if not os.path.exists("full"):
    print("The 'full' directory does not exists, please try again.")
    quit()

if not os.path.exists("thumbnails"):
    Path("my-thumbnails").mkdir(parents=True, exist_ok=True)

"""
Step 2.
We need to convert any png files to jpg files
"""

fullSizedImages = os.listdir("full")

for imagePath in fullSizedImages:

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

"""
Step 3.
We need to delete any existing thumbnails
"""

thumbnails = os.listdir("thumbnails")

for imagePath in thumbnails:

    os.remove(os.getcwd() + "/thumbnails/" + imagePath)

"""
Step 3.
We need to copy all full sized images from the "full" folder
to the "thumbnails" folder
"""


for imagePath in fullSizedImages:

    srcPath = os.getcwd() + "/full/" + imagePath

    destPath = os.getcwd() + "/thumbnails/" + imagePath

    copyfile(srcPath, destPath)

"""
Step 4.
We need to transform every picture in the 
thumbnails folder to a smaller "thumbnail"
version
"""

thumbnailSize = (400, 400)

thumbnails = os.listdir("thumbnails")

for imagePath in thumbnails:

    imagePath = os.getcwd() + "/thumbnails/" + imagePath

    destFile = os.path.splitext(imagePath)[0] + ".jpg"

    try:
        with Image.open(imagePath) as imageFile:
            imageFile.thumbnail(thumbnailSize)
            imageFile.save(destFile, "JPEG")
    except IOError:
        raise(IOError)
        print("cannot create thumbnail for", imagePath)
