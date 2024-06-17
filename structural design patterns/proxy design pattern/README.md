Definition
The Proxy design pattern is a structural design pattern that provides an object that acts as a substitute for a real service object used by a client. A proxy controls access to the original object, allowing you to perform something either before or after the request gets to the original object.

Scenario: Image Viewer
Imagine you are developing an image viewer application that allows users to view, resize, and get the dimensions of images. Loading high-resolution images can be resource-intensive and time-consuming, especially if you have a large number of images. Additionally, you might want to defer loading these images and performing operations on them until they are actually needed by the user.

To address this, you can use the Proxy design pattern to manage these images efficiently.