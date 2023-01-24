function Child1(props)
{
    return (
        <div className="flex pb-5 text-left">
            <div className="relative mr-2 top-1">
                            <span className="box-sizing:border-box;display:inline-block;overflow:hidden;width:21px;height:20px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                <img
                                    alt="checkmark" src="https://www.flagright.com/_next/static/media/checkmark.0a25f896.svg?imwidth=32"
                                    data-nimg="fixed"
                                    className="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                                />
                            </span>
            </div>
            <div><p
                className="text-base font-light lg:text-md">{props.title}</p>
            </div>
        </div>
    )
}
export default Child1;