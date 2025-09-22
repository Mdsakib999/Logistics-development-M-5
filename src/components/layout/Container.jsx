export default function Container({ children, className }){
    //* width must be defined as props
return (
<div className={"mx-auto py-18 px-6 max-w-[1140px] " + (className || '')}>
{children}
</div>
)
}