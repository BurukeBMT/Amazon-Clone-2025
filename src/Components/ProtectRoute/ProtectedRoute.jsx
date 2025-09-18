import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children, redirect, msg }) => {
  const navigate = useNavigate()

  useEffect(() => {}, [])

  return children
}

export default ProtectedRoute
