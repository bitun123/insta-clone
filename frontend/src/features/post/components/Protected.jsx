import { useAuth } from '../../auth/hooks/useAuth'
import { Navigate } from 'react-router-dom'

function Protected({ children }) {

    const { User, loading } = useAuth()
    console.log("Protected component - user:", User, "loading:", loading);



    // Redirect to login if user not found after loading completes
    if (!User&&loading === false) {
        return (
            <Navigate to="/login" replace={true} />
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default Protected