
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Laiba Naz © {new Date().getFullYear()} Books Cart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
