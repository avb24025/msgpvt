export default function Signup() {
    return (
        <>
            <div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h2 className="font-bold text-2xl mb-2 text-center">Welcome to FeedFlow</h2>
                        <h3 className="text-xl mb-4 text-center">Signup</h3>
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Username"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                            />
                            <button type="submit" className="btn btn-primary w-full">Submit</button>
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </>
    )
}