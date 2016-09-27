'use strict'

class Item {
  constructor (draw, dx, dy, width, height) {
    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Set the canvas width and height
    this._canvas.width = this._width = width
    this._canvas.height = this._height = height

    // Store a reference to the draw function and other metadata
    this.dx = dx
    this.dy = dy
    this.draw = draw
  }

  /**
   * @description This method will return a reference to the canvas element belonging to the Entity.
   *
   * @return {Object} The canvas belonging to the Entity
   */
  getCanvas () {
    return this._canvas
  }

  /**
   * @description This method will return a reference to the context derived from the canvas element belonging to the
   *              Entity.
   *
   * @return {Object} The canvas context belonging to this Entity
   */
  getContext () {
    return this._ctx
  }

  getCoordinates () {
    return {
      dx: this.dx,
      dy: this.dy
    }
  }

  setCoordinates ({dx, dy}) {
    this.dx = dx
    this.dy = dy
  }

  getDxCoordinate () {
    return this.dx
  }

  getDyCoordinate () {
    return this.dy
  }

  /**
   * @description A getter to return the Item class function.
   *
   * @returns {Function} A reference to the Item class
   */
  get Class () {
    return Item
  }
}

export { Item }