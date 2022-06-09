import 'tw-elements';
function QualificationCard (props){
    const qualification = props.qualification;
    const index = props.index;

    return(
        <div class={"carousel-item relative float-left w-full text-center ".concat(index === 0? "active": "")}>
            <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
                {qualification.commentary}
            </p>
            <div class="mt-12 mb-6 flex justify-center">
                <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                class="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
                />
            </div>
            <p class="text-gray-500">- Anna Morian</p>
        </div>
    )
}

export default QualificationCard