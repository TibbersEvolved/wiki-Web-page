import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import "../../css/style.css"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="p-2 flex justify-center gap-4">
        <Link
          to="/"
          className='btn btn-primary btn-sm'
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/perks"
          className='btn btn-primary btn-sm'
          activeProps={{
            className: 'font-bold',
          }}
        >
          Perks
        </Link>
      </div>
      <hr />
      <Outlet />
      
    </>
  )
}
