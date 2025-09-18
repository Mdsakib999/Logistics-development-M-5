export default function Container({ children, className }){
return (
<div className={"mx-auto px-6 max-w-[1140px] " + (className || '')}>
{children}
</div>
)
}