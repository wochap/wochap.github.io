---
identifier: blog-#
date: 28-12-2020
dateModified: 28-12-2020
formattedDate: Abril 2020
imageCaption: webpack
imageUrl: //res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png
heroImageUrl: //res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png
title: Machine Learning
description: Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!
tags:
  - webpack
keywords:
  - webpack
---

Labels
Lo que vamos a predecir, por ejemplo: el tipo de animal mostrado en una imagen, el significado de un audio.

Features
Caracteristicas de lo que vamos a predecir, mientras mas features mas sotisficado sera nuestro projecto

Examples

Es una instancia partical de data, estos pertenecen a dos categorias, labeled y unlabeled, labeled incluye feature(s) y su respectivo label, unlabeled solo feature(s).

Usamos labeled examples para train nuestro model, y una vez entranado nuestor modelo lo usamos para predecir examples unlabeled

Models

Define la relacion entre feature(s) y label, el modelo tiene 2 fases

- Training: significa crear o aprender
- Inference: significa aplicar el trained model a unlabeled examples

### Regresion

predice valores continuos, por ejemplo el valor de una casa, probabilidad de hacer click en un anuncio

### Clasification

predice valores discretos, por ejemplo: si la imagen es un perro o gato, si el email es spam o no.

## Glosario

X: vector (features)
Y: predicciones (label)


#### logistic regression

para binary clasification

---

parametric models
linear regression, logistic regression, and SVMs,

Non-parametric models: k-nearest neighbors, decision trees, and random forests. Introducing cross-validation, hyperparameter tuning, and ensemble models.
k-nearest neighbors (k-NN)
https://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/

the model structure is purely determined from the data.


Dataset
https://www.kaggle.com/c/titanic


hyperparameters


Deep learning:
TensorFlow, Caffe, Torch, Theano

Convolutional neural networks (CNNs).
images, vision tasks

Recurrent neural networks (RNNs)
language problems

Deep reinforcement learning.



https://codelabs.developers.google.com/codelabs/cloud-tensorflow-mnist/#0


TensorFlow > Keras
Pytorch > FastAI

https://www.datacamp.com/community/data-science-cheatsheets

inference
cuando quieres usar el modelo

https://www.starlette.io/

pythonanywhere

46:

---

overfitting
modelo aprende a identificar tus examples pero no en general

train_loss menor que valid_loss

3e-3

http://matrixmultiplication.xyz/

https://machinelearningmastery.com/computational-linear-algebra-coders-review/
https://github.com/fastai/numerical-linear-algebra

$$
\vec{y}=X\vec{a}
$$

SGD
Stochastic gradient descent



https://fr.wikipedia.org/wiki/Aide:Formules_TeX


https://www.youtube.com/watch?v=q6DGVGJ1WP4

regulation
que tan bien trabaja en data que no ah sido usada para las entrenar

### Segmentation model

✅Gtraining loss lower than validation loss

---

### Regresion model

we have a function where we take our input pixels (or whatever)

we multiply them by some weight matrix
we replace the negatives with zeros

we multiply it by another weight matrix
replace the negatives with zeros

we do that a few times

we see how close it is to our target

and then we use gradient descent to update our weight matrices using the derivatives
and we do that a few times and eventually we end up with something that can classify movie reviews, recognize cats, etc.


pytorch

### Clasification with localiation

### Detection (multiple objects)
