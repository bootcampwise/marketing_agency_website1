export default function ServiceDetailPage({ params }: { params: { uid: string } }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Service Details</h1>
                <p className="text-gray-600">Service ID: {params.uid}</p>
                <p className="text-gray-600 mt-2">This page is under construction.</p>
            </div>
        </div>
    );
}
