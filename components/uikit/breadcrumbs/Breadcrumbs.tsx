import clsx from 'clsx';
import Link from 'next/link';
import css from './Breadcrumbs.module.css';

type IBreadcrumbsItem = {
    title: string;
    link?: string;
};

type IBreadcrumbs = {
    items: IBreadcrumbsItem[];
    className?: string;
};

const Breadcrumbs: React.FC<IBreadcrumbs> = ({ items, className }) => {
    return (
        <ul className={clsx(css.container, className)}>
            {items.map(({ title, link }: IBreadcrumbsItem, index: number) => (
                <li key={`page_${title}`}>
                    {link ? (
                        <Link href={link}>
                            <a>{title}</a>
                        </Link>
                    ) : (
                        <span>{title}</span>
                    )}
                    {index !== items.length - 1 && <span>{' >'}</span>}
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumbs;
