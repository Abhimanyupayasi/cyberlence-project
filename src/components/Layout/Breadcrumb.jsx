import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  return (
    <div className="text-sm breadcrumbs mb-4">
      <ul>
        
        <li>
          <Link to="/home">Home</Link>
        </li>
        
        
        {pathSegments.map((segment, index) => {
          
          if (index === 0 && segment === 'home') return null;
          
          const routeTo = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const displayName = segment.replace(/-/g, ' '); // 
          
          return isLast ? (
            <li key={segment}>{displayName}</li>
          ) : (
            <li key={segment}>
              <Link to={routeTo}>{displayName}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;