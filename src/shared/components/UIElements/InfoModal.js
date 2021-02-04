import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './InfoModal.css'

const modalElement = document.getElementById('modal-hook')

export function InfoModal({ children, fade = false, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen ? (
      <div className={`modal ${fade ? 'modal-fade' : ''}`}>
        <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
          <div className="flex justify-between border-b border-gray-100 px-5 py-4">
            <div>
                <i className="fas fa-exclamation-circle text-blue-500"></i>
                <span className="font-bold text-gray-700 text-lg">Review Text</span>
              </div>
          </div>

          <div className="modal-body px-10 py-5 text-gray-600">
            {children}
          </div>

          <div className="px-5 py-4 flex justify-end">
            <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150" onClick={close}>Close</button>
          </div>
        </div>
      </div>
    ) : null,
    modalElement
  )
}

export default forwardRef(InfoModal)
