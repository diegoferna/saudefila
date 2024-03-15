import { ReactNode } from "react";

interface Props {
    children: ReactNode
}
function EmptySkeleton({children}:Props) {
    return (  
        <div role="status" className="max-w-sm animate-pulse">{children}</div>
    );
}

export default EmptySkeleton;