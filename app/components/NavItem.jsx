import Link from "next/link"

export default function NavItem({label,path, DataTest}) {
    return (
        <Link href={path} data-test={DataTest}>
            {label}
        </Link>
    )
}