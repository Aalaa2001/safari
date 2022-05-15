function save(form){
    localStorage.setItem("whereto",form.whereto.value);
    localStorage.setItem("howmany",form.howmany.value);
    localStorage.setItem("arrivals",form.arrival.value);
    localStorage.setItem("leaving",form.leaving.value);
    form.whereto.value="";
    form.howmany.value="";
    form.arrival.value="";
    form.leaving.value="";
}

