'use strict'

/**
 * @description Layers are the foundation upon which the visible canvas is built. They are passed around within the game
 *              engine to enable components that wish to draw to the window to do so in a controlled manner.
 */
class Layer {
  constructor (width, height) {
    this._canvas = document.getElementById('viewCanvas')
    this._ctx = this._canvas.getContext('2d')

    // Resize the canvas by default
    return this.resizeCanvas(width, height)
  }

  /**
   * @description This method will return the visible width of the Layer.
   *
   * @returns {Number} The width of the Layer
   */
  getWidth () {
    return this._canvas.width
  }

  /**
   * @description This method will return the visible height of the Layer.
   *
   * @returns {Number} The height of the Layer
   */
  getHeight () {
    return this._canvas.height
  }

  /**
   * @description This method will lock the boundaries of the Layer, preventing any further manual or automatic resizing
   *              of the Layer.
   */
  lockBoundaries () {
    this._boundariesLocked = true
  }

  /**
   * @description This method will completely clear the canvas.
   */
  clearCanvas () {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
  }

  /**
   * @description This method will resize the canvas using the supplied width and height values. If no width or height
   *              value is supplied the window width or height will be used instead.
   *
   * @param {Number=} width  - The desired width to be set
   * @param {Number=} height - The desired height to be set
   */
  resizeCanvas (width, height) {
    // Ensure that the Layer boundaries are not locked
    if (this._boundariesLocked) {
      throw Error('Cannot resize canvas when boundaries are locked')
    }

    this._canvas.width = width || window.innerWidth
    this._canvas.height = height || window.innerHeight
  }
}

export { Layer }
