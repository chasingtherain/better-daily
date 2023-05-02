import Link from "next/link";

export default function privacy(params) {
    return <div>
    <p>you caught me!</p> 
    <p>aint nobody got time to write terms and conditions</p>
    <Link className="underline" href="/api/auth/signin">To Login Page</Link>
</div>
};
