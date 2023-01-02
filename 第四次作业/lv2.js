this.name="fiuck"
const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}
const fn = function (obj) {
   obj.name=stu.skills.speak;
   obj.name();
}
fn(stu);
console.log(stu.name);
