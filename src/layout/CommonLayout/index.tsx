import React from 'react';
import Navigation from 'components/Navigation';

export interface ICommonLayoutProps {
    children?: React.ReactNode;
}

const CommonLayout: React.FC<ICommonLayoutProps> = ({children}) => {

    return(
        <div>
            <Navigation />
            {children}
        </div>
    );
};

export default CommonLayout;
