import { useState } from "react";
import { signInRequest } from "../services/mock-service";
import styles from "../components/AuthentificationForm.module.css";

const AuthentificationForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		try {
			const response = await signInRequest(email, password);
			alert(response);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};


	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit}
		>
			<h2 className={styles.form__heading}>Authentification</h2>
			{error && <p className={styles.error}>{error}</p>}
			<div className={styles.container}>
				<label
					className={styles.label}
					htmlFor="email"
				>
					Email
				</label>
				<input
					className={styles.input}
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					autoComplete="email"
					id="email"
					name="email"
				/>
			</div>
			<div className={styles.container}>
				<label
					className={styles.label}
					htmlFor="password"
				>
					Password
				</label>
				<input
					className={styles.input}
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					type="password"
					autoComplete="current-password"
					id="password"
					name="password"
				/>
			</div>

			<button
				className={styles.submitButton}
				type="submit"
				disabled={!email || !password || isLoading}
			>
				{isLoading ? "Loading..." : "Submit"}
			</button>
		</form>
	);
};

export default AuthentificationForm;
