import Container from "../ui/Container";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-4">
            <Container>
                <p className="text-center text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Kali Prasad Panda. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}