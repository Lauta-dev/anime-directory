import "./css/slider.css";

export function Slice({ children, className }) {
	return <div className={`slider ${className}`}>{children}</div>;
}
